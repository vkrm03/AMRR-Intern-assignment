const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vkrmtemp@gmail.com',
    pass: 'mysp eskk wgqz dwio',
  },
});

const sendItemEmail = async (item) => {
  const mailOptions = {
    from: '"Vikram - Intern" <vkrmtemp@gmail.com>',
    to: item.email,
    subject: `New Item Received: ${item.name}`,
    html: `
      <h2>Hey there!</h2>
      <p>You just received a new item:</p>
      <ul>
        <li><strong>Name:</strong> ${item.name}</li>
        <li><strong>Type:</strong> ${item.type}</li>
        <li><strong>Description:</strong> ${item.description}</li>
        <li><strong>Cover Image:</strong> ${item.coverImage}</li>
        <li><strong>Images:</strong> ${item.images?.join(', ')}</li>
      </ul>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (err) {
    console.error('Failed to send email:', err);
  }
};

// POST route
app.post('/api/items', async (req, res) => {
  const item = req.body;
  console.log('New item received:', item);

  await sendItemEmail(item);

  res.status(200).json({ message: 'Item added and email sent!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
