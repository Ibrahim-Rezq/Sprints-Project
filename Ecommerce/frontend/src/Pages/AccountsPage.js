import React,{useState} from 'react';
import { SignInForm, SignUpForm } from '../Components/Accounts';
import { Link, Route, Routes } from 'react-router-dom';

function AccountsPage() {
  // state
  const [btnTogglerClassess ,setbtnTogglerClassess] = useState({
    btnDangerOutLine:"btn-outline-danger",
    btnDanger:"btn-danger",
  
});
// functions
  const btnToggler = (e) =>{
    btnTogglerClassess.btnDangerOutLine ==="btn-outline-danger" ? 
    setbtnTogglerClassess({...btnTogglerClassess,
      btnDangerOutLine:"btn-danger", btnDanger:'btn-outline-danger' }):
      setbtnTogglerClassess({...btnTogglerClassess,
        btnDangerOutLine:"btn-outline-danger", btnDanger:'btn-danger' })
    
     };

  return ( <div>
     
    <div className='logging d-flex flex-column align-items-center '>
    <div className='login-compo'>
    <div className="sign-in-up-switch d-flex justify-content-evenly align-items-center">

<Link to="login" onClick={btnToggler} className={` btn btn-lg ${btnTogglerClassess.btnDanger}`}> Sign in </Link>
<Link to="Register"  onClick={btnToggler}  className={` btn btn-lg ${btnTogglerClassess.btnDangerOutLine}`}> Sign up </Link>

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
    // <>
    //   <section className='bg-dark text-light text-center '>
    //     <ul className='d-flex justify-content-center p-4'>
    //       <li className='fs-4 '>
    //         <Link className='mt-1 p-3 link-light' to='login'>
    //           Log in
    //         </Link>
    //       </li>
    //       <li className='fs-4 '>
    //         <Link className='mt-1 p-3 link-light ' to='Register'>
    //           Register
    //         </Link>
    //       </li>
    //     </ul>
    //   </section>
    //   <div className='mainCont'>
    //     <Routes>
    //       <Route path='/' element={<SignInForm />} />
    //       <Route path='/login' element={<SignInForm />} />
    //       <Route path='/Register' element={<SignUpForm />} />
    //     </Routes>
    //   </div>
    // </>
    
}

export default AccountsPage
