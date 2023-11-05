import { useState, createContext } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider value={{ toggleCart, isCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}
