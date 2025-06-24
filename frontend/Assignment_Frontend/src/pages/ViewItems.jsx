import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/itemsSlice';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModal';

function ViewItems() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items');
        if (response.ok) {
          const fetchedItems = await response.json();
          fetchedItems.forEach(item => dispatch(addItem(item)));
        }
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchItems();
  }, [dispatch]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', padding: '2rem' }}>
      {items.map((item, i) => (
        <div key={i} onClick={() => setSelectedItem(item)}>
          <ItemCard item={item} />
        </div>
      ))}
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}

export default ViewItems;
