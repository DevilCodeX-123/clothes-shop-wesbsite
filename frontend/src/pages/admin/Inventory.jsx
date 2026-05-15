import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiChevronRight } from 'react-icons/fi';
import './Inventory.css';

const initialProducts = [
  { id: 1, name: 'Royal Bandhgala Blazer', sku: 'VLR-SH-001', stock: 42, price: 14999, category: 'Heritage', status: 'In Stock' },
  { id: 2, name: 'Midnight Banarasi Silk', sku: 'VLR-SK-002', stock: 12, price: 28500, category: 'Luxe', status: 'Low Stock' },
  { id: 3, name: 'Indigo Breeze Kurta', sku: 'VLR-KT-003', stock: 0, price: 4299, category: 'Cotton', status: 'Out of Stock' },
  { id: 4, name: 'Velvet Royal Anarkali', sku: 'VLR-AK-004', stock: 28, price: 12999, category: 'Exclusive', status: 'In Stock' },
];

const Inventory = () => {
  const [products] = useState(initialProducts);

  return (
    <AdminLayout>
      <div className="inventory-page">
        <header className="page-header">
          <div className="header-left">
            <h1>Inventory Management</h1>
            <p>Manage your product stock, SKUs, and pricing</p>
          </div>
          <button className="add-btn"><FiPlus /> Add New Product</button>
        </header>

        <div className="inventory-controls">
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search SKU, Product Name..." />
          </div>
          <div className="filter-actions">
            <button className="ctrl-btn"><FiFilter /> Filters</button>
            <button className="ctrl-btn">Export CSV</button>
          </div>
        </div>

        <div className="inventory-table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>SKU</th>
                <th>CATEGORY</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>
                    <div className="product-cell">
                      <div className="product-thumb"></div>
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td><code className="sku">{product.sku}</code></td>
                  <td>{product.category}</td>
                  <td>{product.stock} Units</td>
                  <td>₹{product.price.toLocaleString()}</td>
                  <td>
                    <span className={`status-pill ${product.status.toLowerCase().replace(/ /g, '-')}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="edit"><FiEdit2 /></button>
                      <button className="delete"><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <p>Showing 4 of 1,422 products</p>
          <div className="pagination">
            <button disabled>Prev</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Inventory;
