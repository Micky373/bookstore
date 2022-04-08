import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  width: '15rem',
  height: '2.313rem',
  margin: '0.375rem 2.938rem 0.125rem 0',
  fontFamily: 'Montserrat',
  fontSize: '1.875rem',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#0290ff',
};

const Navbar = () => (
  <nav>
    <h1 style={HeaderStyle}>Bookstore CMS</h1>
    <ul className="nav_links">
      <Link to="/"><li>Books</li></Link>
      <Link to="/Catagories"><li>Catagories</li></Link>
    </ul>
  </nav>
);

export default Navbar;
