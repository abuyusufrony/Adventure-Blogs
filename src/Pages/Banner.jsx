import React from 'react';
import banner from '../assets/Mounrain.jpg'

const Banner = () => {
    return (
        <div className='  border-2'>
            <div
                className="hero min-h-screen   "
                style={{
                    backgroundImage: `url(${banner})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Reconnect with Nature</h1>


                        <p className="text-lg md:text-xl text-white/80">
                            Dive into untamed destinations, guided by experts who love nature as much as you do. It's time to hike, paddle, and roam far from the familiar.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;