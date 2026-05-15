import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/common/ProductCard';
import { FiSearch, FiX } from 'react-icons/fi';
import './Search.css';

const allProducts = [
  { id: 1, name: 'Royal Bandhgala Blazer', category: 'HERITAGE COLLECTION', price: 14999, image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Ivory Silk Banarasi', category: 'LUXE SILK SERIES', price: 28500, image: 'https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Essential Summer Linen', category: 'BOUTIQUE FORMALS', price: 4200, image: 'https://images.unsplash.com/photo-1598533161399-52e6840742d8?auto=format&fit=crop&q=80&w=600' },
];

const Search = () => {
  const [query, setQuery] = useState('');
  
  const popularSearches = ['Banarasi Silk', 'Bandhgala', 'Winter Coats', 'Formal Shoes', 'Wedding Collection'];

  return (
    <Layout>
      <div className="search-page">
        <div className="container">
          <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for garments, accessories, or boutiques..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && <FiX className="clear-icon" onClick={() => setQuery('')} />}
          </div>

          {!query && (
            <div className="popular-searches">
              <h3>Popular Searches</h3>
              <div className="tags">
                {popularSearches.map(tag => (
                  <button key={tag} onClick={() => setQuery(tag)}>{tag}</button>
                ))}
              </div>
            </div>
          )}

          {query && (
            <div className="search-results">
              <div className="results-header">
                <h2>Search results for "{query}"</h2>
                <p>Found 3 matches</p>
              </div>
              <div className="results-grid">
                {allProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
