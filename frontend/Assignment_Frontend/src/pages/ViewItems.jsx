import ItemCard from '../components/ItemCard';

const dummyItems = [
  {
    id: 1,
    name: 'Nike Air Max',
    type: 'Shoes',
    description: 'Comfortable running shoes for everyday wear.',
    coverImage: 'https://m.media-amazon.com/images/I/614aiM56siL._SY695_.jpg'
  },
  {
    id: 2,
    name: 'Puma Sports Tee',
    type: 'Shirt',
    description: 'Dry fit tee for athletes.',
    coverImage: 'https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740&width=800'
  },
  {
    id: 3,
    name: 'Adidas Joggers',
    type: 'Pants',
    description: 'Comfortable and stylish joggers.',
    coverImage: 'https://pantproject.com/cdn/shop/files/DSC1045_6474c1f4-97e1-46ce-b7c1-1442379f84b6.jpg?v=1743609329'
  }
];

function ViewItems() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem', textAlign: 'center' }}>Items Page</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {dummyItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ViewItems;
