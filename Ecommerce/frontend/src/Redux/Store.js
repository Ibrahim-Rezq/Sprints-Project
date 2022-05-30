import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/Cart/CartSlice'
import adminReducer from './Features/Admin/AdminSlice'
export const store = configureStore({
    reducer: { cart: cartReducer, admin: adminReducer },
})
