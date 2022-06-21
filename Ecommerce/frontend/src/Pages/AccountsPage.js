import React, { useState, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { Modal } from '../Components/Global'
import { SignInForm, SignUpForm } from '../Components/Accounts'
import { useUserContext } from '../Context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import {
    modalState,
    openModal,
    closeModal,
} from '../Redux/Features/Modal/ModalSlice'
function AccountsPage() {
    const { isModalOpen, modalContent, modalError } = useSelector(modalState)
    const dispatch = useDispatch()

    const { isAuth } = useUserContext()
    const navigate = useNavigate()
    // state
    const [btnToggle, setBtnToggle] = useState(true)

    useEffect(() => {
        isAuth && navigate('/')
    }, [isAuth])

    return (
        <div className='logging d-flex flex-column justify-content-center align-items-center '>
            {isModalOpen && (
                <Modal
                    modalContent={modalContent}
                    closeModal={() => {
                        dispatch(closeModal())
                    }}
                    error={modalError}
                />
            )}
            <div className='login-compo shadow-lg '>
                <div className='sign-in-up-switch my-4 d-flex justify-content-evenly align-items-center'>
                    <Link
                        to='login'
                        onClick={() => {
                            setBtnToggle(true)
                        }}
                        className={` btn btn-lg ${
                            btnToggle ? 'btn-danger' : 'btn-outline-danger'
                        }`}
                    >
                        Sign in
                    </Link>
                    <Link
                        to='Register'
                        onClick={() => {
                            setBtnToggle(false)
                        }}
                        className={` btn btn-lg ${
                            btnToggle ? 'btn-outline-danger' : 'btn-danger'
                        }`}
                    >
                        Sign up
                    </Link>
                </div>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <SignInForm
                                openModal={openModal}
                                dispatch={dispatch}
                            />
                        }
                    />
                    <Route
                        path='/login'
                        element={
                            <SignInForm
                                openModal={openModal}
                                dispatch={dispatch}
                            />
                        }
                    />
                    <Route
                        path='/Register'
                        element={
                            <SignUpForm
                                openModal={openModal}
                                dispatch={dispatch}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    )
}

export default AccountsPage
