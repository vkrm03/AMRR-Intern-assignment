import { useState } from 'react';

function AddItem() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [images, setImages] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const payload = {
      name,
      type,
      description,
      coverImage,
      images: images.split(',').map(img => img.trim())
    };

    try {
      const res = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus('Item successfully added!');
        setName('');
        setType('');
        setDescription('');
        setCoverImage('');
        setImages('');
      } else {
        setStatus('Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server error');
    }
  };

  return (
    <div style={{
      padding: '4rem',
      maxWidth: '600px',
      margin: '0 auto',
      marginTop:"40px",
      background: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Add New Item</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          placeholder="Item Type (e.g. Shoes, Shirt)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          style={inputStyle}
        />

        <textarea
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ ...inputStyle, height: '100px' }}
        />

        <input
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          placeholder="Additional Images (comma separated URLs)"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Submit Item
        </button>
      </form>

      {status && <p style={{ marginTop: '1rem', color: '#444' }}>{status}</p>}
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

export default AddItem;
