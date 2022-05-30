import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { TotalRevenue } from '../../../Utils/Constant'
const initialState = {
    totalRevenue: [...TotalRevenue],
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cart.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItemToCart } = adminSlice.actions
export const totalRevenueData = (state) => state.admin.totalRevenue

export default adminSlice.reducer
