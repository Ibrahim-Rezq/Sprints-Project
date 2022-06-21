import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUserContext } from '../../Context/UserContext'

function SignUpForm({ dispatch, openModal }) {
    const { isAuth, userLoading, userError, Signin } = useUserContext()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [signUpData, setSignUpData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            signUpData.userName &&
            signUpData.email &&
            signUpData.password &&
            signUpData.confirmPassword
        ) {
            if (signUpData.password === signUpData.confirmPassword) {
                Signin(signUpData)
            } else
                dispatch(
                    openModal({ content: 'password dosnt match', error: true })
                )
        } else
            dispatch(
                openModal({ content: 'Please fill all feilds', error: true })
            )
    }

    const inputChangeHandler = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (!userLoading && !userError && isAuth) navigate('/profile')
        if (
            userError &&
            signUpData.userName &&
            signUpData.email &&
            signUpData.password &&
            signUpData.confirmPassword
        )
            dispatch(
                openModal({
                    content: 'either email or password is not right',
                    error: true,
                })
            )
    }, [userLoading, userError])

    return (
        <div className='firstContainer'>
            <form
                className='d-flex signupForms flex-column'
                onSubmit={handleSubmit}
            >
                <label className='my-2 lead' htmlFor='UserName'>
                    UserName
                </label>
                <input
                    className='inputs form-control rounded-0 shadow-none'
                    id='UserName'
                    type='text'
                    placeholder=' Write your Second Name'
                    name='userName'
                    value={signUpData['lasttName']}
                    onChange={inputChangeHandler}
                />{' '}
                <label className='my-2 lead' htmlFor='email'>
                    Email address
                </label>
                <input
                    className='inputs form-control rounded-0 shadow-none'
                    id='email'
                    type='email'
                    placeholder='...........@gmail'
                    name='email'
                    value={signUpData['Email']}
                    onChange={inputChangeHandler}
                />{' '}
                <label className='my-2 lead' htmlFor='password'>
                    Password
                </label>
                <input
                    className='inputs form-control rounded-0 shadow-none'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Write a complex password '
                    name='password'
                    id='password'
                    value={signUpData['password']}
                    onChange={inputChangeHandler}
                />{' '}
                <label className='my-2 lead' htmlFor='confirmPassword'>
                    Confirm password
                </label>
                <input
                    className='inputs form-control rounded-0 shadow-none'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm password '
                    name='confirmPassword'
                    id='confirmPassword'
                    value={signUpData['confirmPassword']}
                    onChange={inputChangeHandler}
                />
                <div className='mt-2'>
                    <input
                        id='showPassowrd'
                        onClick={(e) => setShowPassword(e.target.checked)}
                        type='checkbox'
                    />
                    <label className='ms-2 lead' htmlFor='showPassowrd'>
                        Show passowrd
                    </label>
                </div>
                <div className='text-center mt-2'>
                    {' '}
                    <input
                        className='submit mt-1 btn btn-lg btn-danger'
                        type='submit'
                        value='Submit'
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
