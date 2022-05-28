import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [{ help: 'helmss' }],
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
