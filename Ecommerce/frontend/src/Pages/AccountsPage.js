import React, { useState } from 'react';
import { SignInForm, SignUpForm } from '../Components/Accounts';
import { Link, Route, Routes } from 'react-router-dom';

function AccountsPage() {
  // state
  const [btnTogglerClassess, setbtnTogglerClassess] = useState({
    btnDangerOutLine: 'btn-outline-danger',
    btnDanger: 'btn-danger',
  });
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
        });
  };

  return (
    <div className='logging d-flex flex-column justify-content-center align-items-center '>
      <div className='login-compo shadow-lg '>
        <div className='sign-in-up-switch my-4 d-flex justify-content-evenly align-items-center'>
          <Link
            to='login'
            onClick={btnToggler}
            className={` btn btn-lg ${btnTogglerClassess.btnDanger}`}>
            {' '}
            Sign in{' '}
          </Link>
          <Link
            to='Register'
            onClick={btnToggler}
            className={` btn btn-lg ${btnTogglerClassess.btnDangerOutLine}`}>
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
  );
}

export default AccountsPage;
