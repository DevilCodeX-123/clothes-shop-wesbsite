import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">Velora</h2>
            <p className="footer-desc">
              Curating the finest Indian ethnic wear with a commitment to quality and contemporary elegance since 2012.
            </p>
            <div className="social-links">
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="footer-links">
            <h3>Shopping</h3>
            <ul>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/boutique">Boutique Finder</Link></li>
              <li><Link to="/gift-cards">Gift Cards</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Be the first to experience our seasonal drops and exclusive boutique invitations.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">JOIN</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/shipping-info">Shipping Info</Link>
            <Link to="/store-locator">Store Locator</Link>
          </div>
          <div className="footer-copyright">
            © 2024 Velora Clothing Store. All rights reserved.
          </div>
          <div className="footer-credits">
            Made by <strong>DEVIL KK</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
