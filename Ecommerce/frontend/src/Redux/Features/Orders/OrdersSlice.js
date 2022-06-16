import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    if (user) {
        const orders = localStorage.getItem('orders' + user.id)
        console.log(orders)
        if (orders) {
            return JSON.parse(localStorage.getItem('orders' + user.id))
        } else {
            return []
        }
    } else {
        return []
    }
}

const initialState = {
    orders: getLocalStorage(),
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addNewOrder: (state, action) => {
            state.orders.push(action.payload)
        },
        initOrders: (state, action) => {
            state.orders = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addNewOrder, initOrders } = ordersSlice.actions
export const OrdersState = (state) => state.orders

export default ordersSlice.reducer
