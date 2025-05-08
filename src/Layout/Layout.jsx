import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav/Nav';

const Layout = () => {
    return (
        <div className=''>

            <Nav></Nav>
            <Outlet></Outlet>



        </div>

    );
};

export default Layout;