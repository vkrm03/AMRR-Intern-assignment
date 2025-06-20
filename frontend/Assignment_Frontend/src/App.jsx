import { Routes, Route, Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#f3f3f3', display: 'flex', gap: '1rem' }}>
        <Link to="/view">View Items</Link>
        <Link to="/add">Add Item</Link>
      </nav>

      <Routes>
        <Route path="/view" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - Page not found. Go to /view or /add</h2>} />
      </Routes>
    </div>
  );
}

export default App;
