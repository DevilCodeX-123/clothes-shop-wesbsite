import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/common/ProductCard';
import { FiUser, FiPackage, FiMapPin, FiHeart, FiSettings, FiLogOut, FiChevronRight } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './Profile.css';

const orders = [
  { id: 'ORD-77291', date: '12 Oct 2024', status: 'Delivered', total: 14999, items: 1 },
  { id: 'ORD-66102', date: '28 Aug 2024', status: 'Cancelled', total: 4200, items: 1 }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const { wishlistItems } = useCart();

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="orders-list">
            <div className="content-header">
              <h2>Recent Orders</h2>
              <p>Track and manage your past purchases</p>
            </div>
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <span className="order-id">{order.id}</span>
                    <p className="order-date">{order.date}</p>
                  </div>
                  <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                </div>
                <div className="order-body">
                  <div className="order-details">
                    <p>{order.items} Items</p>
                    <h3>₹{order.total.toLocaleString()}</h3>
                  </div>
                  <button className="details-btn">View Details <FiChevronRight /></button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'wishlist':
        return (
          <div className="wishlist-content">
            <div className="content-header">
              <h2>My Wishlist</h2>
              <p>Items you've saved for later</p>
            </div>
            {wishlistItems.length > 0 ? (
              <div className="products-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {wishlistItems.map(item => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FiHeart size={48} color="var(--color-gray-200)" />
                <p>Your wishlist is empty</p>
              </div>
            )}
          </div>
        );
      case 'addresses':
        return (
          <div className="address-section">
            <div className="section-header">
              <h2>Saved Addresses</h2>
              <button className="add-btn">+ Add New</button>
            </div>
            <div className="address-card">
              <div className="badge home">HOME</div>
              <h3>Anish Das</h3>
              <p>42, Green Park Main, Near Aurobindo Market</p>
              <p>New Delhi, Delhi - 110016</p>
              <p>Mobile: +91 98765 43210</p>
              <div className="address-actions">
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Section coming soon...</div>;
    }
  };

  return (
    <Layout>
      <div className="profile-page">
        <div className="container">
          <div className="profile-layout">
            <aside className="profile-sidebar">
              <div className="user-info-card">
                <div className="user-avatar">AD</div>
                <div className="user-text">
                  <h3>Anish Das</h3>
                  <p>anish.das@example.com</p>
                </div>
              </div>
              
              <nav className="profile-nav">
                <button 
                  className={activeTab === 'orders' ? 'active' : ''} 
                  onClick={() => setActiveTab('orders')}
                >
                  <FiPackage /> My Orders
                </button>
                <button 
                  className={activeTab === 'wishlist' ? 'active' : ''} 
                  onClick={() => setActiveTab('wishlist')}
                >
                  <FiHeart /> Wishlist
                </button>
                <button 
                  className={activeTab === 'addresses' ? 'active' : ''} 
                  onClick={() => setActiveTab('addresses')}
                >
                  <FiMapPin /> Addresses
                </button>
                <button 
                  className={activeTab === 'account' ? 'active' : ''} 
                  onClick={() => setActiveTab('account')}
                >
                  <FiUser /> Account Details
                </button>
                <button 
                  className={activeTab === 'settings' ? 'active' : ''} 
                  onClick={() => setActiveTab('settings')}
                >
                  <FiSettings /> Settings
                </button>
                <button className="logout" onClick={() => window.location.href='/'}><FiLogOut /> Logout</button>
              </nav>
            </aside>

            <main className="profile-content">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
