import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router';

const Places = ({ allpalces }) => {
    const { image, adventureTitle, location, adventureCost, id } = allpalces;

    return (
        <div className="max-w-sm mx-auto shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 bg-base-100 mb-5 p-2">
            <figure className="relative">
                <img
                    src={image}
                    alt={adventureTitle}
                    className="w-full h-48 object-cover"
                />
                {/* Ribbon-style price tag */}
                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    💰 ${adventureCost}
                </div>
            </figure>
            <div className="p-4 space-y-3">
                {/* Adventure Title with underline & gradient text */}
                <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary underline decoration-dotted">
                    {adventureTitle}
                </h2>

                {/* Location Badge */}
                <div className="badge badge-accent text-sm px-3 py-2 font-semibold shadow-md">
                    📍 {location}
                </div>
                <Link to={`/${id}`} className="btn btn-outline btn-primary w-full gap-2">
                    <FaBookOpen className="text-lg" />
                    View Blog
                </Link>

            </div>
        </div>
    );
};

export default Places;
