import React from 'react'
import { SignInForm, SignUpForm } from '../Components/Accounts'
import { Link, Route, Routes } from 'react-router-dom'

function AccountsPage() {
    return (
        <>
            <section className='bg-dark text-light text-center '>
                <ul className='d-flex justify-content-center p-4'>
                    <li className='fs-4 '>
                        <Link className='mt-1 p-3 link-light' to='login'>
                            Log in
                        </Link>
                    </li>
                    <li className='fs-4 '>
                        <Link className='mt-1 p-3 link-light ' to='Register'>
                            Register
                        </Link>
                    </li>
                </ul>
            </section>
            <div className='mainCont'>
                <Routes>
                    <Route path='/' element={<SignInForm />} />
                    <Route path='/login' element={<SignInForm />} />
                    <Route path='/Register' element={<SignUpForm />} />
                </Routes>
            </div>
        </>
    )
}

export default AccountsPage
