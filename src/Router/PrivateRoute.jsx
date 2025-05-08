import React, { useContext } from 'react';
import { Authcontext } from '../Auth/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;

    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;