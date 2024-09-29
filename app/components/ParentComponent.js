import { useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search term input from Navbar
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Products searchTerm={searchTerm} />
    </div>
  );
};

export default App;
