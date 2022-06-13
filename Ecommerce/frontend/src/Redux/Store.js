import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/Cart/CartSlice';
import adminReducer from './Features/Admin/AdminSlice';
import productsReducer from './Features/Products/ProductsSlice';
import userReducer from './Features/User/UserSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    admin: adminReducer,
    user: userReducer,
  },
});
