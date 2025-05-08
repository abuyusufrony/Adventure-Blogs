import React, { use, useContext } from 'react';
import { Authcontext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const loaction = useLocation()
    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;

    }

    return <Navigate state={loaction.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;