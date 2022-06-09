import React, {useState} from 'react'


function SignInForm() {
// state
const [logInData, setLogInData] = useState({
    Email:"",
    password: "",

});
const [ passwordChecker, setpasswordChecker] = useState({
    password: "password",
    text : "text"
});
// functions
 const changeHandler = (e) =>{
setLogInData({...logInData, [e.target.name]:e.target.value })

 }
const showPassword = (e) =>{
    passwordChecker.password === "password" ? setpasswordChecker({...passwordChecker, password:"text"}) :
    setpasswordChecker({...passwordChecker, password :"password"}) 
}

//  const submitHandler = (e) =>{
//     setLogInData()
    
//      }
    return (
         <div className='secondCont'>
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
 
            // <form className='form-box' >
                
            //     <br />
            //     <div className=' d-flex flex-column'>
            //         {' '}
            //         <label className='mb-2 fs-5' for=''> E-mail </label>
            //         <input
            //         className='imputs'
            //             type='email'
            //             required
            //             placeholder='.....@gmail'
            //             name='Email'
            //             value={ logInData["Email"]}
            //             onChange={changeHandler}
            //         />
            //     </div>
            //     <br />
            //     <div className=' d-flex flex-column'>
            //         {' '}
            //         <label className='fs-5' for=''>Password</label>
            //         <input 
            //         className='imputs mt-2'
            //             type={`${passwordChecker.password}`}
            //             required
            //             placeholder='Password '
            //             name="password"
            //             value={ logInData["password"]}
            //             onChange={changeHandler}
            //         />
            //     </div>
            //     <br />
            //     <input onClick={showPassword}  className={`mb-3 me-3 align-self-start`} type="checkbox" />
            //     <label htmlFor=""> Show passowrd</label>
                
            //     <div className='logging-submit d-flex flex-column align-items-center  '>
            //         {' '}
                  
            
            //         <input className=' mt-3 btn-lg btn-danger' type='submit' value='Login ' />
                   
            //         <a className='mt-3' href="">Forget password</a>
            //         <a href=""></a>
            //     </div>
            //     <br />
            // </form>
            
  
       
    )
}

export default SignInForm
  // <div className='secondCont'>
        //     <h2> Login </h2>

        //     <form >
                
        //         <br />
        //         <div className='email'>
        //             {' '}
        //             <label for=''> Email </label>
        //             <input
        //                 type='email'
        //                 required
        //                 placeholder='.....@gmail'
        //                 name='Email'
        //                 value={ logInData["Email"]}
        //                 onChange={changeHandler}
        //             />
        //         </div>
        //         <br />
        //         <div className='pass2'>
        //             {' '}
        //             <label for=''>Password</label>
        //             <input
        //                 type='password'
        //                 required
        //                 placeholder='Password '
        //                 name="password"
        //                 value={ logInData["password"]}
        //                 onChange={changeHandler}
        //             />
        //         </div>
        //         <br />
        //         <div className='submit'>
        //             {' '}
        //             <input type='submit' value='Login ' />
        //         </div>
        //         <br />
        //     </form>
        // </div>