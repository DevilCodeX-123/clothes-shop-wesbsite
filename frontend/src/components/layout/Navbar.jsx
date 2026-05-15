import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, wishlistItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="logo">Velora</Link>

        {/* Nav Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link></li>
          <li><Link to="/new-arrivals" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link></li>
          <li><Link to="/boutique" onClick={() => setIsMobileMenuOpen(false)}>Boutique</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
        </ul>

        {/* Action Icons */}
        <div className="nav-actions">
          <Link to="/search" className="nav-icon-btn desktop-only"><FiSearch size={20} /></Link>
          <Link to="/wishlist" className="nav-icon-btn">
            <FiHeart size={20} />
            {wishlistItems.length > 0 && <span className="cart-count">{wishlistItems.length}</span>}
          </Link>
          <Link to="/cart" className="nav-icon-btn">
            <FiShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to="/profile" className="nav-icon-btn desktop-only"><FiUser size={20} /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
