// import axios from 'axios';
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
  const Login = async (url) => {
    dispatch(loginBegin());
    // try {
    //   const response = await axios.get(url);
    setTimeout(() => {
      dispatch(loginSucsses(dummyUser));
    }, 0);
    // } catch {
    // dispatch(getProductsError());
    // }
  };

  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ ...state, Login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
