import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some((cartItem) => cartItem.id === item.id);

      if (isAlreadyInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      }

      return [...prevCart, { ...item, quantity }];
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const clear = () => setCart([]);

  const totalItems = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);

  const totalPrice = cart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
