import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        id: '1',
        firstName: 'guest',
        lastName: 'gusto',
        address: 'city,Government,Egypt',
        phone: '+201XXXXXXXXX',
        profileImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
    },
    userLoading: true,
    userError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginBegin: (state, action) => {
            state.userLoading = true
            state.userError = false
        },
        loginSucsses: (state, action) => {
            state.user = { ...action.payload }
            state.userLoading = false
            state.userError = false
        },
        loginError: (state, action) => {
            state.userLoading = false
            state.userError = true
        },
    },
})

export const { loginBegin, loginError, loginSucsses } = userSlice.actions
export const userState = (state) => state.user

export default userSlice.reducer
