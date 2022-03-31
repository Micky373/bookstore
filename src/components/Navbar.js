import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  color: '#b6ad90',
};

const Navbar = () => (
  <nav>
    <h1 style={HeaderStyle}>Bookstore</h1>
    <ul className="nav_links">
      <Link to="/"><li>Books</li></Link>
      <Link to="/Catagories"><li>Catagories</li></Link>
    </ul>
  </nav>
);

export default Navbar;
