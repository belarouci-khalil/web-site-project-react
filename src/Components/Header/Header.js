import React, { useState } from 'react';
import './Header.css'; 
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className='background'>
    <nav className="navbar">
      <div className="navbar-brand">AcoApp</div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Login">SingUp  </a></li>
      </ul>
      <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
        &#9776;
      </div>
    </nav></main>
  );
};

export default Navbar;
