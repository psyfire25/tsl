import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () =>
      <div className="header">
        <ul className="menu">
          <Link to="/">Info</Link>
          <Link to="/Bilety">Bilety</Link>
          <Link to="/Kontak">Kontak</Link>
        </ul>
      </div>

export default Header;
