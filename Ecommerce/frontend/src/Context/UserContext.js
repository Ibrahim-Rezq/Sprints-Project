import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    logingOut,
    userState,
    loginBegin,
    loginError,
    loginSucsses,
} from '../Redux/Features/User/UserSlice'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const { REACT_APP_API_URL } = process.env

    const state = useSelector(userState)
    const dispatch = useDispatch()
    const Login = async (logInData) => {
        try {
            dispatch(loginBegin())
            const res = await axios.post(REACT_APP_API_URL + '/users/login/', {
                email: logInData.email,
                password: logInData.password,
            })
            dispatch(loginSucsses(res.data))
        } catch {
            dispatch(loginError())
        }
    }
    const Signin = async (SignInData) => {
        try {
            dispatch(loginBegin())
            const res = await axios.post(
                REACT_APP_API_URL + '/users/register_user/',
                {
                    name: SignInData.userName,
                    email: SignInData.email,
                    password: SignInData.password,
                }
            )
            dispatch(loginSucsses(res.data))
        } catch {
            dispatch(loginError())
        }
    }
    const logOut = () => {
        dispatch(logingOut())
    }

    useEffect(() => {
        sessionStorage.setItem('user', JSON.stringify(state.user))

        // eslint-disable-next-line
    }, [state.user])

    return (
        <UserContext.Provider value={{ ...state, Login, logOut, Signin }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
