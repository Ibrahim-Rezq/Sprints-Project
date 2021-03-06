import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/Cart/CartSlice'
import productsReducer from './Features/Products/ProductsSlice'
import ordersReducer from './Features/Orders/OrdersSlice'
import userReducer from './Features/User/UserSlice'
import modalReducer from './Features/Modal/ModalSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        orders: ordersReducer,
        user: userReducer,
        modal: modalReducer,
    },
})
