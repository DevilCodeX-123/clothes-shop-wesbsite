import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item));
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      wishlistItems, 
      addToCart, 
      removeFromCart, 
      updateQty, 
      toggleWishlist,
      cartCount: cartItems.reduce((acc, item) => acc + item.qty, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
};
