import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav/Nav';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto'>

            <Nav></Nav>
            <Outlet></Outlet>



        </div>

    );
};

export default Layout;