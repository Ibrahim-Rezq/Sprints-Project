import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  userState,
  loginBegin,
  loginError,
  loginSucsses,
} from '../Redux/Features/User/UserSlice';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const state = useSelector(userState);
  const dispatch = useDispatch();
  const dummyUser = {
    id: '1',
    firstName: 'Seif',
    lastName: 'Omran',
    address: 'Obour City,Egypt',
    phone: '+201099662420',
    profileImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
  };
  const Login = async (logInData) => {
    // dispatch(loginBegin());
    // try {
    //   const res = await axios.post('http://127.0.0.1:8000/users/login/', {
    //     email: 'hima@hima.com',
    //     password: 'hima1234',
    //   });
    //   console.log(res.data);
    //   dispatch(loginSucsses(res.data));
    // } catch {
    //   dispatch(loginError());
    // }
    dispatch(loginBegin());
    setTimeout(() => {
      dispatch(loginSucsses(dummyUser));
    }, 0);
  };

  useEffect(() => {
    Login();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, Login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
