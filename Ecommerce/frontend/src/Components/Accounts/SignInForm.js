import React from 'react'

function SignInForm() {
    return (
        <div className='secondCont'>
            <h2> Login </h2>
            <form action='xxxx.py' method='Post'>
                <div className='user'>
                    <label for=''>Name</label>
                    <input
                        type='text'
                        required
                        placeholder=' Write your Name'
                        name='userName'
                    />
                </div>
                <br />
                <div className='email'>
                    <label for=''> Email </label>
                    <input
                        type='email'
                        required
                        placeholder='.....@gmail'
                        name='email'
                    />
                </div>
                <br />
                <div className='pass2'>
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
                <div className='submit'>
                    {' '}
                    <input type='submit' value='Login ' />
                </div>
                <br />
            </form>
        </div>
    )
}

export default SignInForm
