import React from 'react';
import { Navigate } from 'react-router';
import { useUserContext } from '../../Context/UserContext';

const ProtectedLinks = ({ children }) => {
  const { isAuth } = useUserContext();

  return <>{isAuth ? { ...children } : <Navigate to={'/'} />})</>;
};

export default ProtectedLinks;
