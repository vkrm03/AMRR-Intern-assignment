function ItemCard({ item }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      transition: '0.3s ease',
    }}>
      <img src={item.coverImage} alt={item.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: 0 }}>{item.name}</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>{item.type}</p>
        <p style={{ fontSize: '13px', marginTop: '0.5rem' }}>{item.description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
