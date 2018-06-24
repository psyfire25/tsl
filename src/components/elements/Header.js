import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../images/logo.png'

const Header = () =>
      <div className="header">
        <div><Link to="/"><img className="logo" src={Logo} alt="logo" /></Link></div>
          <Link to="/">Dom</Link>
          <Link to="/InfoPage">Info</Link>
          <Link to="/BiletyPage">Bilety</Link>
          <Link to="/KontaktPage">Kontak</Link>
      </div>

export default Header;
