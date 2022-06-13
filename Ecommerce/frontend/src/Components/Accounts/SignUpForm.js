import React, {useState} from 'react';

function SignUpForm() {
    // state

      // form opject 
const [signUpData,setSignUpData] = useState({
    firstName: "" ,
    lastName: "" ,
    Email: "",
    password: "",
    confirmPassowrd: "", 
});
    // checkbox opject 
const [ passwordChecker, setpasswordChecker] = useState({
    password: "password",
    text : "text"
})
    // functions
    const ImputChangeHandler = (e) =>{
setSignUpData({...signUpData, [e.target.name]:e.target.value  
  })
    }
     // checkbox handler
    const showPassword = (e) =>{
        passwordChecker.password === "password" ? setpasswordChecker({...passwordChecker, password:"text"}) :
        setpasswordChecker({...passwordChecker, password :"password"}) 
    }
   
    // const signUpSubmitHandler= (e) =>{
        
    // }

    return ( <div className='firstContainer'>
            <h2> Sign Up </h2>
            <form >
                <div className='user'>
                    <label for=''>First Name</label>
                    <input
                        type='text'
                        required
                        placeholder=' Write your First Name'
                        name='firstName'
                        value={signUpData["firstName"]}
                        onChange={ImputChangeHandler}
                    />
                </div>
                <br />
                <div className='user2'>
                    <label for=''>Last Name</label>
                    <input
                        type='text'
                        required
                        placeholder=' Write your Second Name'
                        name='lastName'
                        value={signUpData["lasttName"]}
                        onChange={ImputChangeHandler}
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
                        name='Email'
                        value={signUpData["Email"]}
                        onChange={ImputChangeHandler}
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
                        value={signUpData["password"]}
                        onChange={ImputChangeHandler}
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
                        name="confirmPassword"
                        value={signUpData["confirmPassword"]}
                        onChange={ImputChangeHandler}
                    />
                </div>
                <br />

                <div className='submit'>
                    {' '}
                    <input type='submit' value='Submit' />
                </div>
                <br />
               
            </form>
        </div>
    )
}

export default SignUpForm
