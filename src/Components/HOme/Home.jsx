import React from 'react';
import Banner from '../../Pages/Banner';
import Place from '../Place/Place';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className=''>
                <Place></Place>
            </div>
        </div>
    );
};

export default Home;