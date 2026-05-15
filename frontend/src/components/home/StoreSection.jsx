import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import './StoreSection.css';

const StoreSection = () => {
  return (
    <section className="store-section section-padding">
      <div className="container store-grid">
        <div className="store-info">
          <span className="section-subtitle">OUR LANDMARK SHOWROOM</span>
          <h2 className="section-title">Velora Jaipur: The Heart of Heritage</h2>
          <p className="store-description">
            Located in the historic lanes of Jaipur, our flagship showroom is more than a store—it's a sanctuary for Indian fashion. We've created a space that mirrors our design philosophy: Accessible Prestige.
          </p>
          
          <div className="store-stats">
            <div className="stat-item">
              <span className="stat-value">15,000+</span>
              <span className="stat-label">SQ. FT. SHOWROOM</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50+</span>
              <span className="stat-label">MASTER ARTISANS</span>
            </div>
          </div>
          
          <button className="btn-outline light">VISIT THE SHOWROOM</button>
        </div>
        
        <div className="store-image-container">
          <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200" alt="Velora Jaipur Showroom" className="store-image" />
          <div className="location-card glass">
            <div className="pin-icon">
              <FiMapPin size={24} color="var(--color-gold)" />
            </div>
            <div className="location-details">
              <h4>Civic Center, Jaipur</h4>
              <p>RAJASTHAN, INDIA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
