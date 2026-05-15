import React from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/common/ProductCard';
import './Collections.css';

const products = [
  { id: 1, name: 'Royal Bandhgala Blazer', category: 'HERITAGE COLLECTION', price: 14999, oldPrice: 18500, image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600', badge: 'NEW ARRIVAL' },
  { id: 2, name: 'Ivory Silk Banarasi', category: 'LUXE SILK SERIES', price: 28500, image: 'https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=600', badge: 'TRENDING' },
  { id: 3, name: 'Essential Summer Linen', category: 'BOUTIQUE FORMALS', price: 4200, image: 'https://images.unsplash.com/photo-1598533161399-52e6840742d8?auto=format&fit=crop&q=80&w=600', badge: '' },
  { id: 4, name: 'Monogram Leather Tote', category: 'ACCESSORIES', price: 12400, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600', badge: '' },
  { id: 5, name: 'Velvet Royal Anarkali', category: 'BOUTIQUE EXCLUSIVE', price: 12999, image: 'https://images.unsplash.com/photo-1589410184463-547e70408544?auto=format&fit=crop&q=80&w=600', badge: '' },
  { id: 6, name: 'Aero-Luxe Sport Sneakers', category: 'PERFORMANCE WEAR', price: 8900, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600', badge: 'NEW' },
];

const Collections = () => {
  return (
    <Layout>
      <div className="collections-page container">
        <div className="collections-layout">
          {/* Sidebar */}
          <aside className="collections-sidebar">
            <div className="filter-group">
              <h3>CATEGORY</h3>
              <div className="filter-list">
                <div className="filter-item">Ethnic Wear <span className="count">42</span></div>
                <div className="filter-item active">Western Formals <span className="count">18</span></div>
                <div className="filter-item">Casual Linens <span className="count">24</span></div>
                <div className="filter-item">Luxe Accessories <span className="count">56</span></div>
              </div>
            </div>

            <div className="filter-group">
              <h3>SIZE</h3>
              <div className="size-grid">
                <div className="size-box">XS</div>
                <div className="size-box active">S</div>
                <div className="size-box">M</div>
                <div className="size-box">L</div>
                <div className="size-box">XL</div>
                <div className="size-box">XXL</div>
              </div>
            </div>

            <div className="filter-group">
              <h3>COLOR PALETTE</h3>
              <div className="color-options">
                <div className="color-circle active" style={{ backgroundColor: '#002140' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#F8F9FA' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#D4AF37' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#1B4D3E' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#800000' }}></div>
              </div>
            </div>

            <div className="filter-group">
              <h3>PRICE RANGE</h3>
              <div className="filter-list">
                <div className="filter-item">Under ₹5,000</div>
                <div className="filter-item">₹5,000 - ₹10,000</div>
                <div className="filter-item">₹10,000 - ₹25,000</div>
                <div className="filter-item">Over ₹25,000</div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="collections-main">
            <header className="collections-header">
              <div className="title-area">
                <h1>All Collections</h1>
                <p>Showing 1-12 of 144 premium garments</p>
              </div>
              <div className="sort-select">
                <select>
                  <option>Sort by: Trending</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </header>

            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
