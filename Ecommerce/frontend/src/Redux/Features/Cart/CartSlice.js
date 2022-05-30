import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../../Utils/Constant'
const initialState = {
    cart: [
        { id: 'recRoQD1w0ItHzafo', amount: 5, product: Products[1] },
        { id: 'recRoQD1w0ItHza', amount: 9, product: Products[2] },
    ],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cart.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions
export const selectCount = (state) => state.cart

export default cartSlice.reducer
