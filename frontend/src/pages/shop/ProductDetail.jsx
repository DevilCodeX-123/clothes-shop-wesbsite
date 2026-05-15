import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/common/ProductCard';
import { FiHeart, FiShoppingBag, FiShare2, FiTruck, FiRefreshCcw } from 'react-icons/fi';
import { FaRulerCombined } from 'react-icons/fa6';
import './ProductDetail.css';

const relatedProducts = [
  { id: 2, name: 'Ivory Silk Banarasi', category: 'LUXE SILK SERIES', price: 28500, image: 'https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=600', badge: 'TRENDING' },
  { id: 3, name: 'Essential Summer Linen', category: 'BOUTIQUE FORMALS', price: 4200, image: 'https://images.unsplash.com/photo-1598533161399-52e6840742d8?auto=format&fit=crop&q=80&w=600', badge: '' },
  { id: 4, name: 'Monogram Leather Tote', category: 'ACCESSORIES', price: 12400, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600', badge: '' },
];

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImg, setActiveImg] = useState('https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800');

  const images = [
    'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1594938384824-022ef62953e5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1589410184463-547e70408544?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <Layout>
      <div className="product-detail-page">
        <div className="container">
          <div className="product-main">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="thumbnail-list">
                {images.map((img, i) => (
                  <div 
                    key={i} 
                    className={`thumbnail ${activeImg === img ? 'active' : ''}`}
                    onClick={() => setActiveImg(img)}
                  >
                    <img src={img} alt={`Product view ${i+1}`} />
                  </div>
                ))}
              </div>
              <div className="main-image">
                <img src={activeImg} alt="Product Main" />
                <span className="badge new">NEW ARRIVAL</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-panel">
              <span className="product-category">HERITAGE COLLECTION</span>
              <h1 className="product-title">Royal Bandhgala Blazer</h1>
              <div className="product-price">
                <span className="current-price">₹14,999</span>
                <span className="old-price">₹18,500</span>
                <span className="discount">(20% OFF)</span>
              </div>
              <p className="tax-info">MRP inclusive of all taxes</p>

              <div className="product-selection">
                <div className="selection-header">
                  <h3>SELECT SIZE</h3>
                  <button className="size-guide"><FaRulerCombined size={16} /> Size Guide</button>
                </div>
                <div className="size-options">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button 
                      key={size} 
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="action-buttons">
                <button className="add-to-cart-btn"><FiShoppingBag size={20} /> ADD TO BAG</button>
                <button className="wishlist-btn"><FiHeart size={20} /> WISHLIST</button>
              </div>

              <div className="product-features">
                <div className="feature-item">
                  <FiTruck className="icon" />
                  <div>
                    <h4>Free Shipping</h4>
                    <p>On all orders above ₹5,000</p>
                  </div>
                </div>
                <div className="feature-item">
                  <FiRefreshCcw className="icon" />
                  <div>
                    <h4>15 Days Return</h4>
                    <p>Easy returns and exchanges</p>
                  </div>
                </div>
              </div>

              <div className="product-description">
                <h3>PRODUCT DESCRIPTION</h3>
                <p>
                  A masterpiece of tailoring, this Royal Bandhgala Blazer is crafted from premium wool blend fabric. Featuring intricate hand-embroidery on the collar and cuffs, it represents the pinnacle of Jaipur's heritage craftsmanship.
                </p>
                <ul className="spec-list">
                  <li><strong>Material:</strong> Premium Wool Blend</li>
                  <li><strong>Color:</strong> Midnight Navy</li>
                  <li><strong>Pattern:</strong> Solid with Embroidered Accents</li>
                  <li><strong>Fit:</strong> Slim Fit</li>
                </ul>
              </div>

              <div className="social-share">
                <FiShare2 size={18} /> <span>SHARE THIS PRODUCT</span>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="related-section section-padding">
            <h2 className="section-title">You May Also Like</h2>
            <div className="title-underline"></div>
            <div className="related-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
