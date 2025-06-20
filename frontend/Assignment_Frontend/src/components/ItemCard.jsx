function ItemCard({ item }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={item.coverImage} alt={item.name} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.name}>{item.name}</h3>
        <p style={styles.type}>{item.type}</p>
        <p style={styles.description}>{item.description}</p>
        <button style={styles.button}>Enquire</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '16px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  imageWrapper: {
    height: '220px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.3s ease',
  },
  content: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: 0,
  },
  type: {
    fontSize: '0.9rem',
    color: '#666',
    margin: 0,
  },
  description: {
    fontSize: '0.95rem',
    color: '#333',
    margin: 0,
  },
  button: {
    marginTop: '1rem',
    padding: '0.6rem',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default ItemCard;
