import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  fontFamily: 'Montserrat',
  fontSize: '2rem',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#0290ff',
};

const userLogoStyle = {
  height: '3rem',
  width: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '35rem',
  fontSize: '2rem',
  border: 'solid 1px #e8e8e8',
  padding: '0.5rem',
  borderRadius: '50%',
  color: '#0290ff',
  justifySelf: 'flex-end',
};

const Navbar = () => (
  <nav>
    <h1 style={HeaderStyle}>Bookstore CMS</h1>
    <ul className="nav_links">
      <Link to="/"><li>Books</li></Link>
      <Link to="/Catagories"><li>Catagories</li></Link>
      <div style={userLogoStyle}>
        <i className="fa fa-user" aria-hidden="true" />
      </div>
    </ul>
  </nav>
);

export default Navbar;
