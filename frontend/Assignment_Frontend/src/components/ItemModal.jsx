function ItemModal({ item, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '600px',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>X</button>
        <h2>{item.name}</h2>
        <p><strong>Type:</strong> {item.type}</p>
        <p>{item.description}</p>
        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', margin: '1rem 0' }}>
          {item.images.map((img, i) => (
            <img key={i} src={img} alt="extra" style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '6px' }} />
          ))}
        </div>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#2b7cff', color: 'white', border: 'none', borderRadius: '6px' }}>
          Enquire
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
