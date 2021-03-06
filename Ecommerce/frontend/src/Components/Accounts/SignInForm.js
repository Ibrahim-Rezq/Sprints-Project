import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUserContext } from '../../Context/UserContext'

function SignInForm({ openModal, dispatch }) {
    const { Login, isAuth, userLoading, userError } = useUserContext()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [logInData, setLogInData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (logInData.email && logInData.password) {
            Login(logInData)
        } else
            dispatch(
                openModal({
                    content: 'Enter Both Email and Password',
                    error: true,
                })
            )
    }
    const changeHandler = (e) => {
        setLogInData({ ...logInData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (!userLoading && !userError && isAuth) navigate('/profile')
        if (userError && logInData.email && logInData.password)
            dispatch(
                openModal({
                    content: 'either email or password is not right',
                    error: true,
                })
            )
    }, [userLoading, userError])

    return (
        <form className='form-box' onSubmit={handleSubmit}>
            <br />
            <div className='d-flex flex-column'>
                <label className='ms-2 lead' htmlFor=''>
                    E-mail
                </label>
                <input
                    className='inputs mt-2 form-control rounded-0 shadow-none'
                    type='email'
                    placeholder='Mohamad@gmail'
                    name='email'
                    value={logInData['Email']}
                    onChange={changeHandler}
                />
            </div>
            <br />
            <div className=' d-flex flex-column'>
                <label className='ms-2 lead' htmlFor=''>
                    Password
                </label>
                <input
                    className='inputs mt-2 form-control rounded-0 shadow-none'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password '
                    name='password'
                    value={logInData['password']}
                    onChange={changeHandler}
                />
            </div>
            <br />
            <input
                onClick={(e) => {
                    setShowPassword(e.target.checked)
                }}
                className={`mb-3 me-3 align-self-start`}
                type='checkbox'
            />
            <label className='form-lable'> Show passowrd</label>

            <div className='logging-submit d-flex flex-column align-items-center  '>
                <button className=' mt-3 btn-lg btn-danger' type='submit'>
                    Login
                </button>
                <a className='mt-3 ' href=''>
                    Forget password
                </a>
            </div>
        </form>
    )
}

export default SignInForm
