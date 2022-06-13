import React, { useState } from 'react'
import { SignInForm, SignUpForm } from '../Components/Accounts'
import { Link, Route, Routes } from 'react-router-dom'

function AccountsPage() {
    // state
    const [btnTogglerClassess, setbtnTogglerClassess] = useState({
        btnDangerOutLine: 'btn-outline-danger',
        btnDanger: 'btn-danger',
    })
    // functions
    const btnToggler = (e) => {
        btnTogglerClassess.btnDangerOutLine === 'btn-outline-danger'
            ? setbtnTogglerClassess({
                  ...btnTogglerClassess,
                  btnDangerOutLine: 'btn-danger',
                  btnDanger: 'btn-outline-danger',
              })
            : setbtnTogglerClassess({
                  ...btnTogglerClassess,
                  btnDangerOutLine: 'btn-outline-danger',
                  btnDanger: 'btn-danger',
              })
    }

    return (
        <div>
            <div className='logging d-flex flex-column justify-content-start align-items-center '>
                <div className='login-compo '>
                    <div className='sign-in-up-switch d-flex justify-content-evenly align-items-center'>
                        <Link
                            to='login'
                            onClick={btnToggler}
                            className={` btn btn-lg ${btnTogglerClassess.btnDanger}`}
                        >
                            {' '}
                            Sign in{' '}
                        </Link>
                        <Link
                            to='Register'
                            onClick={btnToggler}
                            className={` btn btn-lg ${btnTogglerClassess.btnDangerOutLine}`}
                        >
                            {' '}
                            Sign up{' '}
                        </Link>
                    </div>
                    <Routes>
                        <Route path='/' element={<SignInForm />} />
                        <Route path='/login' element={<SignInForm />} />
                        <Route path='/Register' element={<SignUpForm />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
    {
        /* <hr />
            <div class='row btn-light '>
                <div class='col-md-5 mb-3 mt-3 ms-2'>
                    <div class='container'>
                        <div class='col '>
                            <h2> Sign Up </h2>
                        </div>
                        <form action='xxxx.py' method='Post'>
                            <div class='col'>
                                <label for=''>First Name</label>
                                <input
                                    type='text'
                                    required
                                    placeholder=' Write your First Name'
                                    name='userName'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                <label for=''>Last Name</label>
                                <input
                                    type='text'
                                    required
                                    placeholder=' Write your Second Name'
                                    name='userName'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                {' '}
                                <label for=''>Email "" </label>
                                <input
                                    type='email'
                                    required
                                    placeholder='...........@gmail'
                                    name='email'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                {' '}
                                <label for=''>Password</label>
                                <input
                                    type='password'
                                    required
                                    placeholder='Write a complex password '
                                    name='password'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                {' '}
                                <label for=''>Password</label>
                                <input
                                    type='password'
                                    required
                                    placeholder='Confirm password '
                                    name='Confirm password'
                                />
                            </div>
                            <br />

                            <div class='col'>
                                {' '}
                                <input type='submit' value='Submit' />
                            </div>
                            <br />
                            <div class='login'>
                                <a href='#...'> Login </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class='col-md-5 mb-3 mt-5'>
                    <div class='container2'>
                        <div class='col mt-3'>
                            {' '}
                            <h2> Login </h2>
                        </div>
                        <form action='xxxx.py' method='Post'>
                            <div class='col'>
                                <label for=''>Name</label>
                                <input
                                    type='text'
                                    required
                                    placeholder=' Write your Name'
                                    name='userName'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                {' '}
                                <label for=''> Email </label>
                                <input
                                    type='email'
                                    required
                                    placeholder='.....@gmail'
                                    name='email'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                {' '}
                                <label for=''>Password</label>
                                <input
                                    type='password'
                                    required
                                    placeholder='Password '
                                    name='Confirm password'
                                />
                            </div>
                            <br />
                            <div class='col'>
                                {' '}
                                <input type='submit' value='Login ' />
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
            </div>

            <hr />
            <div class='loading'>
                <div class='dots-bars-3'></div>
            </div>
            <hr /> */
    }
}

export default AccountsPage
