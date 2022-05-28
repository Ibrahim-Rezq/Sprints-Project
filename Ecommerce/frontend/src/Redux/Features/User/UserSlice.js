import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.Users.push(action.payload)
        },
    },
})

export const { addUser } = userSlice.actions
export const userUsers = (state) => state.Users

export default userSlice.reducer
