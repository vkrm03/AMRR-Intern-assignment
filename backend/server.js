// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/items', (req, res) => {
  console.log('New item received:', req.body);
  res.status(200).json({ message: 'Item added!' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
