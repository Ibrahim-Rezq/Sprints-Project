import React from 'react'

function SignUpForm() {
    return (
        <div className='firstContainer'>
            <h2> Sign Up </h2>
            <form action='xxxx.py' method='Post'>
                <div className='user'>
                    <label for=''>First Name</label>
                    <input
                        type='text'
                        required
                        placeholder=' Write your First Name'
                        name='userName'
                    />
                </div>
                <br />
                <div className='user2'>
                    <label for=''>Last Name</label>
                    <input
                        type='text'
                        required
                        placeholder=' Write your Second Name'
                        name='userName'
                    />
                </div>
                <br />
                <div className='email'>
                    {' '}
                    <label for=''>Email address</label>
                    <input
                        type='email'
                        required
                        placeholder='...........@gmail'
                        name='email'
                    />
                </div>
                <br />
                <div className='pass'>
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
                <div className='pass2'>
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

                <div className='submit'>
                    {' '}
                    <input type='submit' value='Submit' />
                </div>
                <br />
                <div className='login'>
                    <a href='#...'> Login </a>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
