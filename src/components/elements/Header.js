import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../images/logo.png'

const Header = () =>
      <div className="header">
        <div><Link to="/"><img className="logo" src={Logo} alt="logo" /></Link></div>
          <Link to="/">Dom</Link>
          <Link to="/Info">Info</Link>
          <Link to="/Bilety">Bilety</Link>
          <Link to="/Kontak">Kontak</Link>
      </div>

export default Header;
