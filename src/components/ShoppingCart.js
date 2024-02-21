import React from 'react';
import Cart from './Cart';
import { useCart } from '../CartContext';

const ShoppingCart = () => {
  const { cartItems, handleRemoveItem, updateCartItemQuantity } = useCart();

  const handleUpdateQuantity = (itemId, quantity) => {
    updateCartItemQuantity(itemId, parseInt(quantity));
  };

  const proceedToCheckout = () => {
    console.log('Checkout process started');
  };

  return (
    <Cart
      cartItems={cartItems}
      updateQuantity={handleUpdateQuantity}
      removeItem={handleRemoveItem}
      proceedToCheckout={proceedToCheckout}
    />
  );
};

export default ShoppingCart;
