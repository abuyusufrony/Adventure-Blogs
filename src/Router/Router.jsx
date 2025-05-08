import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Components/HOme/Home';
import ViewBlogs from '../Components/ViewBlogs/ViewBlogs';
import Login from '../Components/Login/Login';
import Regis from '../Components/Regis/Regis';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {

            path: '/:id',
            element: <PrivateRoute>
                <ViewBlogs></ViewBlogs>
            </PrivateRoute>,
            loader: () => fetch('/place.json')

        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Regis></Regis>
        }


    ]

},



])

export default Router;