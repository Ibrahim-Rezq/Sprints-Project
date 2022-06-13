import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserContext } from '../../Context/UserContext';
function SignInForm() {
  //varibles
  const { Login } = useUserContext();
  const navigate = useNavigate();

  // state
  const [logInData, setLogInData] = useState({
    Email: '',
    password: '',
  });

  const [passwordChecker, setpasswordChecker] = useState({
    password: 'password',
    text: 'text',
  });

  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    Login();
    navigate('/profile');
  };
   // input change Handler
  const changeHandler = (e) => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };
   //check box handler
  const showPassword = (e) => {
    passwordChecker.password === 'password'
      ? setpasswordChecker({ ...passwordChecker, password: 'text' })
      : setpasswordChecker({ ...passwordChecker, password: 'password' });
  };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   return(  <div className='secondCont'>
       <h2> Login </h2>
   
       <form >
   
           <br />
           <div className='email'>
               {' '}
               <label for=''> Email </label>
               <input
                   type='email'
                   required
                   placeholder='.....@gmail'
                   name='Email'
                   value={ logInData["Email"]}
                   onChange={changeHandler}
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
                   name="password"
                   value={ logInData["password"]}
                   onChange={changeHandler}
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
  

export default SignInForm;
