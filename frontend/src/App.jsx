import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Public Pages
import Home from './pages/home/Home'
import Collections from './pages/shop/Collections'
import ProductDetail from './pages/shop/ProductDetail'
import Cart from './pages/shop/Cart'
import Wishlist from './pages/shop/Wishlist'
import Search from './pages/search/Search'
import About from './pages/about/About'
import Boutique from './pages/boutique/Boutique'
import Profile from './pages/profile/Profile'

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard'
import EmployeeDashboard from './pages/admin/EmployeeDashboard'
import Inventory from './pages/admin/Inventory'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/new-arrivals" element={<Collections />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/employees" element={<EmployeeDashboard />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/analytics" element={<AdminDashboard />} /> {/* Placeholder */}
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
