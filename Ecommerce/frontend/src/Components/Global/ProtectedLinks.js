import React from 'react';
import { Outlet, Navigate } from 'react-router';

const ProtectedLinks = ({ children }) => {
  const auth = true;
  return <>{auth ? { ...children } : <Navigate to={-1}/>})</>
};

export default ProtectedLinks;
