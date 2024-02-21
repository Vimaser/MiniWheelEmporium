import React from "react";
import { useCart } from "../CartContext";

const Cart = ({ proceedToCheckout }) => {
  const { cartItems, updateCartItemQuantity, removeItemFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price);
        return acc + item.quantity * price;
    }, 0);
};


  const handleQuantityChange = (itemId, quantity) => {
    const newQuantity = Math.max(Number(quantity), 0);
    updateCartItemQuantity(itemId, newQuantity);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            min="0"
          />
           <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        </div>
      ))}
      <div className="cart-total">
        <h4>Total: ${calculateTotal().toFixed(2)}</h4>
      </div>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
