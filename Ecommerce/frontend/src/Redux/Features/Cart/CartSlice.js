import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../Utils/Constant';
const initialState = {
  cart: [
    { id: 'recRoQD1w0ItHzafo', amount: 5, product: Product[1] },
    { id: 'recRoQD1w0ItHza', amount: 9, product: Product[2] },
  ],
  total: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
      state.total = state.cart.reduce((prev, item) => {
        return item.product.price * item.amount + prev;
      }, 0);
      state.totalAmount = state.cart.reduce((prev, item) => {
        return item.amount + prev;
      }, 0);
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const selectCount = (state) => state.cart;

export default cartSlice.reducer;
