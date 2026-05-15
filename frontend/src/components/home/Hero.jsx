import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">THE HERITAGE COLLECTION</span>
          <h1 className="hero-title">Style for Everyone</h1>
          <p className="hero-description">
            Experience the essence of Indian craftsmanship blended with contemporary silhouettes. 
            From Jaipur to your wardrobe, curated for the modern connoisseur.
          </p>
          <div className="hero-actions">
            <button className="hero-btn white">SHOP MEN</button>
            <button className="hero-btn outline">SHOP WOMEN</button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
