import React from 'react';
import { Link } from "react-router-dom";
import Search from './Search';
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" >
        <h1><span className="Logo badge badge-pill badge-dark">REACT COIN</span></h1>
      </Link>
      <Search />
    </div>
  );
};

export default Header;