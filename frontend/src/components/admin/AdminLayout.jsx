import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiLayout, FiPackage, FiUsers, 
  FiCalendar, FiSettings, FiLogOut, FiBell, FiSearch 
} from 'react-icons/fi';
import { FiBarChart } from 'react-icons/fi';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { icon: <FiLayout />, label: 'Dashboard', path: '/admin' },
    { icon: <FiPackage />, label: 'Inventory', path: '/admin/inventory' },
    { icon: <FiUsers />, label: 'Employees', path: '/admin/employees' },
    { icon: <FiBarChart />, label: 'Analytics', path: '/admin/analytics' },
    { icon: <FiCalendar />, label: 'Schedule', path: '/admin/schedule' },
    { icon: <FiSettings />, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-logo">Velora Admin</h2>
          <p className="sidebar-subtitle">Premium Management</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="admin-profile">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Admin" />
            <div className="profile-info">
              <h4>Vikram Singh</h4>
              <p>Senior Stylist</p>
            </div>
          </div>
          <button className="logout-btn">
            <FiLogOut /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-search">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search for products, orders..." />
          </div>
          <div className="header-actions">
            <button className="header-btn"><FiBell /></button>
            <div className="admin-badge">
              <span>Admin Profile</span>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Admin" />
            </div>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
