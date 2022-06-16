import { createSlice } from '@reduxjs/toolkit'

const getSessionStorage = () => {
    let user = sessionStorage.getItem('user')
    if (user) {
        return JSON.parse(sessionStorage.getItem('user'))
    } else {
        return {
            id: '0',
            userName: 'gusto',
            address: 'city,Government,Egypt',
            phone: '+201XXXXXXXXX',
            profileImage:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
        }
    }
}

const initialState = {
    user: getSessionStorage(),
    isAuth: getSessionStorage().token,
    userLoading: false,
    userError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logingOut: (state) => {
            state.user = {
                id: '1',
                userName: 'gusto',
                address: 'city,Government,Egypt',
                phone: '+201XXXXXXXXX',
                profileImage:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
            }
            state.userLoading = false
            state.userError = false
            state.isAuth = false
        },
        loginBegin: (state, action) => {
            state.userLoading = true
            state.userError = false
        },
        loginSucsses: (state, { payload }) => {
            state.user = {
                ...state.user,
                id: payload._id,
                userName: payload.name,
                profileImage:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
                token: payload.token,
            }
            state.userLoading = false
            state.userError = false
            state.isAuth = true
        },
        loginError: (state, action) => {
            state.userLoading = false
            state.userError = true
        },
        signupBegin: (state, action) => {
            state.creatUserLoading = true
            state.creatUserError = false
        },
        signupSucsses: (state, { payload }) => {
            state.user = {
                ...state.user,
                id: payload._id,
                userName: payload.name,
                profileImage:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
            }
            state.creatUserLoading = false
            state.creatUserError = false
            state.isAuth = true
        },
        signupError: (state, action) => {
            state.creatUserLoading = false
            state.creatUserError = true
        },
    },
})

export const { logingOut, loginBegin, loginError, loginSucsses } =
    userSlice.actions
export const userState = (state) => state.user

export default userSlice.reducer
