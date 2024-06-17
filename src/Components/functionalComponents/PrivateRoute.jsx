import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { tokenExpired } from '../../api_consume/checkToken';

export const PrivateRoute = () => {
    const token = localStorage.getItem('accessToken');
    const isAuthenticated = token && !tokenExpired(token);

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
