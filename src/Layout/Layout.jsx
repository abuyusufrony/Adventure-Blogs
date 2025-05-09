import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto '>

            <Nav></Nav>
            <Outlet></Outlet>
            <div className='mt-10'>
                <Footer></Footer>
            </div>


        </div>

    );
};

export default Layout;