import React from 'react';
import Layout from '../../components/layout/Layout';
import { FiTrash2, FiMinus, FiPlus, FiShield, FiTruck, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="cart-page">
        <div className="container">
          <h1 className="cart-title">Your Shopping Bag</h1>
          
          {cartItems.length > 0 ? (
            <div className="cart-layout">
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}><FiTrash2 /></button>
                      </div>
                      <p className="item-meta">Category: <span>{item.category}</span></p>
                      <div className="item-controls">
                        <div className="qty-selector">
                          <button onClick={() => updateQty(item.id, item.qty - 1)}><FiMinus /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)}><FiPlus /></button>
                        </div>
                        <span className="item-price">₹{(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="cart-benefits">
                  <div className="benefit">
                    <FiTruck />
                    <p>Free express delivery on orders above ₹5,000</p>
                  </div>
                  <div className="benefit">
                    <FiShield />
                    <p>Secure checkout with SSL encryption</p>
                  </div>
                </div>
              </div>

              <aside className="order-summary">
                <div className="summary-card">
                  <h3>Order Summary</h3>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                  </div>
                  <div className="summary-row">
                    <span>Estimated Tax (GST 12%)</span>
                    <span>₹{(subtotal * 0.12).toLocaleString()}</span>
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  
                  <div className="coupon-box">
                    <input type="text" placeholder="Coupon Code" />
                    <button>APPLY</button>
                  </div>

                  <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                </div>
              </aside>
            </div>
          ) : (
            <div className="empty-cart">
              <FiShoppingBag size={64} color="var(--color-gray-200)" />
              <h2>Your bag is empty</h2>
              <p>Looks like you haven't added anything to your bag yet.</p>
              <button className="btn-primary" onClick={() => window.location.href='/collections'}>START SHOPPING</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
