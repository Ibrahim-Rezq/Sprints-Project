import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../Utils/Constant';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  console.log(cart);
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (state.cart.find((item) => item.id === action.payload.id))
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: action.payload.amount };
          } else return item;
        });
      else state.cart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },
    countCartTotal: (state, action) => {
      state.total = state.cart.reduce((prev, item) => {
        return item.product.price * item.amount + prev;
      }, 0);
      state.totalAmount = state.cart.reduce((prev, item) => {
        return item.amount + prev;
      }, 0);
    },
    toggleCartItemAmount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: action.payload.value };
        } else return item;
      });
    },
    clearCartItems: (state, action) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  removeItemFromCart,
  clearCartItems,
  countCartTotal,
  toggleCartItemAmount,
} = cartSlice.actions;
export const selectCount = (state) => state.cart;

export default cartSlice.reducer;
