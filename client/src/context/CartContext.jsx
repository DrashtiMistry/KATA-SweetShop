// context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (sweet) => {
  setCartItems(prev => {
    const existing = prev.find(item => item._id === sweet._id);
    if (existing) {
      return prev.map(item =>
        item._id === sweet._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prev, { ...sweet, quantity: 1 }];
  });
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
