import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ element, ...rest }) {
    const isAuthenticated = useSelector((state) => state.auth?.isLogin);
    console.log(isAuthenticated, 'user')

    return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
