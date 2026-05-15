import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedCategories.css';

const categories = [
  { id: 1, name: 'Mens', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=600', color: '#002140' },
  { id: 2, name: 'Womens', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=600', color: '#f8f9fa' },
  { id: 3, name: 'Boys', image: 'https://images.unsplash.com/photo-1519234131116-77884d673551?auto=format&fit=crop&q=80&w=600', color: '#a888b5' },
  { id: 4, name: 'Girls', image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&q=80&w=600', color: '#ffe4e1' },
];

const FeaturedCategories = () => {
  return (
    <section className="featured-categories section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Curated for All</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              className="category-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-overlay"></div>
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
