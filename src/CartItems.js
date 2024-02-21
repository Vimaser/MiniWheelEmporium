export const addItemToCart = (cartItems, itemToAdd) => {
    console.log("Current cart items:", cartItems);
    console.log("Item to add:", itemToAdd);
  
    const newCartItems = cartItems.map(item => 
      item.id === itemToAdd.id ? 
        { ...item, quantity: item.quantity + 1 } : 
        item
    ).concat(
      cartItems.some(item => item.id === itemToAdd.id) ? [] : [{ ...itemToAdd, quantity: 1 }]
    );
  
    console.log("Updated cart items:", newCartItems);
    return newCartItems;
  };
  
  
  export const removeItemFromCart = (cartItems, itemToRemoveId) => {
    return cartItems.filter(item => item.id !== itemToRemoveId);
  };
  
  export const updateCartItemQuantity = (cartItems, itemId, newQuantity) => {
    return newQuantity > 0 ? 
      cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ) :
      cartItems.filter(item => item.id !== itemId);
  };
  