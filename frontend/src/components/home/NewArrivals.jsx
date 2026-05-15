import React from 'react';
import ProductCard from '../common/ProductCard';
import './NewArrivals.css';

const products = [
  {
    id: 1,
    name: 'Regal Navy Sherwani',
    category: 'HERITAGE COLLECTION',
    price: 24999,
    oldPrice: 28500,
    image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600',
    badge: 'NEW ARRIVAL'
  },
  {
    id: 2,
    name: 'Midnight Banarasi Silk',
    category: 'LUXE SERIES',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=600',
    badge: ''
  },
  {
    id: 3,
    name: 'Indigo Breeze Kurta',
    category: 'PREMIUM COTTON',
    price: 4299,
    image: 'https://images.unsplash.com/photo-1598533161399-52e6840742d8?auto=format&fit=crop&q=80&w=600',
    badge: 'TRENDING'
  },
  {
    id: 4,
    name: 'Velvet Royal Anarkali',
    category: 'BOUTIQUE EXCLUSIVE',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1589410184463-547e70408544?auto=format&fit=crop&q=80&w=600',
    badge: ''
  }
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FRESH PICKS</span>
          <h2 className="section-title">New Arrivals</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="btn-outline">View All Collections</button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
