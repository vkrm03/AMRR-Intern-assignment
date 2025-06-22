import { useState } from 'react';

function AddItem({ setItems }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [cover, setCover] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      type,
      description: desc,
      coverImage: cover,
      images: images.split(',').map(img => img.trim()) // comma separated URLs
    };

    setItems(prev => [...prev, newItem]);
    alert('Item successfully added');

    setName('');
    setType('');
    setDesc('');
    setCover('');
    setImages('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input placeholder="Item Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Item Type (e.g. Shirt, Shoes)" value={type} onChange={e => setType(e.target.value)} required />
      <textarea placeholder="Item Description" value={desc} onChange={e => setDesc(e.target.value)} required />
      <input placeholder="Cover Image URL" value={cover} onChange={e => setCover(e.target.value)} required />
      <input placeholder="Additional Images (comma separated URLs)" value={images} onChange={e => setImages(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;
