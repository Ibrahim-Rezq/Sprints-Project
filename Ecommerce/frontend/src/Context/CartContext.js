import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  clearCartItems,
  toggleCartItemAmount,
  countCartTotal,
  selectCount,
} from '../Redux/Features/Cart/CartSlice';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const state = useSelector(selectCount);
  const dispatch = useDispatch();

  const addToCart = ({ id, color, amount, product }) => {
    dispatch(addItemToCart({ id, color, amount, product }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const toggleAmount = (id, value) => {
    dispatch(toggleCartItemAmount({ id, value }));
  };

  const clearCart = () => {
    dispatch(clearCartItems());
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch(countCartTotal());
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
