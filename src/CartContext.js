import React, { createContext, useState, useContext } from 'react';
import { addItemToCart, removeItemFromCart as removeItemFromCartItems, updateCartItemQuantity as updateCartItemQuantityFromCartItems } from './CartItems';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {
      console.error('Error reading cart items from localStorage:', error);
      return [];
    }
  });

  const handleAddToCart = (product) => {
    setCartItems(currentCartItems => {
      const updatedCartItems = addItemToCart(currentCartItems, product);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(currentCartItems => {
      const updatedCartItems = removeItemFromCart(currentCartItems, itemId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems(currentCartItems => {
      const updatedCartItems = updateCartItemQuantityFromCartItems(currentCartItems, itemId, newQuantity);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, removeItemFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
