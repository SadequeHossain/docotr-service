import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from './useAuth';
import useFirebase from './useFirebase';






const PrivateRoute = ({ children }) => {
    const {firebaseData}= useAuth();

    // console.log('This is Auth', firebaseData.user)
    const { user } = firebaseData;
    console.log('User from Private Route', user)
    const { pathname } = useLocation();
    console.log('location', pathname);
    return (
        user.email ? (
            children
        ) : (
            <Navigate to="/login" state={{ from: pathname }} replace />
        )

    )
};




export default PrivateRoute;