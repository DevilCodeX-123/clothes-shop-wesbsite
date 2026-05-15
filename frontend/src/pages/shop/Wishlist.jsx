import React from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/common/ProductCard';
import './Wishlist.css';

const wishlistItems = [
  { id: 1, name: 'Royal Bandhgala Blazer', category: 'HERITAGE COLLECTION', price: 14999, image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600', badge: '' },
  { id: 2, name: 'Ivory Silk Banarasi', category: 'LUXE SILK SERIES', price: 28500, image: 'https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=600', badge: '' },
  { id: 6, name: 'Aero-Luxe Sport Sneakers', category: 'PERFORMANCE WEAR', price: 8900, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600', badge: '' },
];

const Wishlist = () => {
  return (
    <Layout>
      <div className="wishlist-page">
        <div className="container">
          <div className="wishlist-header">
            <h1>Your Wishlist</h1>
            <p>{wishlistItems.length} Items saved for later</p>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="wishlist-grid">
              {wishlistItems.map(product => (
                <div key={product.id} className="wishlist-item-wrapper">
                  <ProductCard product={product} />
                  <button className="move-to-bag">MOVE TO BAG</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-wishlist">
              <h2>Your wishlist is empty</h2>
              <p>Save your favorite items to keep track of them.</p>
              <button className="btn-primary" onClick={() => window.location.href='/collections'}>EXPLORE COLLECTIONS</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
