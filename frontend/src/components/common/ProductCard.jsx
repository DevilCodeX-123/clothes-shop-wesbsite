import React from 'react';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, category, price, oldPrice, image, badge } = product;
  const { addToCart, toggleWishlist, wishlistItems } = useCart();

  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <div className="product-image-container">
        {badge && <span className={`badge ${badge.toLowerCase().replace(' ', '-')}`}>{badge}</span>}
        <img src={image} alt={name} className="product-image" />
        
        <button 
          className={`wishlist-overlay-btn ${isWishlisted ? 'active' : ''}`} 
          onClick={() => toggleWishlist(product)}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <FiHeart size={18} fill={isWishlisted ? "#EF4444" : "none"} />
        </button>
        
        <div className="product-quick-actions">
          <button className="quick-view-btn"><FiEye /> QUICK VIEW</button>
        </div>
      </div>
      
      <div className="product-details">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          <span className="current-price">₹{price.toLocaleString()}</span>
          {oldPrice && <span className="old-price">₹{oldPrice.toLocaleString()}</span>}
        </div>
        <button className="add-to-cart-bar" onClick={() => addToCart(product)}>
          <FiShoppingCart /> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
