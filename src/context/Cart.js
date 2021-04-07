import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        setCart,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  const { cart, products, setCart, setProducts } = context;
  return { cart, products, setCart, setProducts };
}
