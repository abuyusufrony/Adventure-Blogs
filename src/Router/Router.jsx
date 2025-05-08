import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Components/HOme/Home';
import ViewBlogs from '../Components/ViewBlogs/ViewBlogs';
import Login from '../Components/Login/Login';
import Regis from '../Components/Regis/Regis';

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
            element: <ViewBlogs></ViewBlogs>,
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