import React from 'react';
import { Navigate } from 'react-router';

const ProtectedLinks = ({ children }) => {
  const auth = true;
  return <>{auth ? { ...children } : <Navigate to={-1} />})</>;
};

export default ProtectedLinks;
