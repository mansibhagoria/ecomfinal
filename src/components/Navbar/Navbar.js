import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';


import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='title'>Namma Chai</h1>
      <nav>
        <ul className='links'>
          <li>Home</li>
          <li>Categories</li>
          <li>About</li>
          <li>Signup</li>
        </ul>
      </nav>
      <div className="search-icons">
        <input type="text" placeholder="What are you looking for?" className='input'  />   
        <FaSearch className="search-icon" />
      </div>
      <div className="icons">
        <FaHeart className="heart-icon" />
        <FaShoppingCart className="cart-icon" />
      </div>
    </div>
  );
}

export default Navbar;

