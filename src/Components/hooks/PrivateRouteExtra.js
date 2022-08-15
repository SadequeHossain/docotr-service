import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRouteExtra = ({ children }) => {

    const { firebaseData } = useAuth();

    const {user}=firebaseData
  const location = useLocation();

  const {pathname}=location
  console.log(location);
  return user.email ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: pathname }}/>
  );
};

export default PrivateRouteExtra;