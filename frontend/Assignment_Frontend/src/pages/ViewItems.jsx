import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModal';

function ViewItems() {
  const items = useSelector((state) => state.items.items);
  const [selectedItem, setSelectedItem] = useState(null);

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
