import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import {
    FaMapMarkerAlt,
    FaDollarSign,
    FaClock,
    FaFire,
    FaCampground,
    FaRecycle,
    FaExclamationTriangle,
} from 'react-icons/fa';

const ViewBlogs = () => {
    const { id } = useParams();
    const pid = parseInt(id);
    const data = useLoaderData();

    const allplace = data.find((allp) => allp.id === pid);



    const {
        image,
        adventureTitle,
        location,
        adventureCost,
        duration,
        adventureLevel,
        includedItems,
        ecoFriendlyFeatures,
        specialInstructions,
        shortDescription,
    } = allplace;

    const getLevelBadge = (level) => {
        switch (level) {
            case 'Easy':
                return 'badge-success';
            case 'Medium':
                return 'badge-warning';
            case 'Hard':
                return 'badge-error';
            default:
                return 'badge-neutral';
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <img src={image} alt={adventureTitle} className="w-full h-64 object-cover" />
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {adventureTitle}
            </h1>

            {/* Short Description */}
            <p className=" font-semibold mb-4">{shortDescription}</p>

            {/* Location */}
            <div className="flex items-center text-accent font-semibold text-lg mb-6 gap-2">
                <FaMapMarkerAlt /> {location}
            </div>

            {/* Tour Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <FaDollarSign className="text-green-600" />
                    <span className="font-medium">Cost:</span> ${adventureCost}
                </div>
                <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span className="font-medium">Duration:</span> {duration}
                </div>
                <div className="flex items-center gap-2">
                    <FaFire className="text-red-500" />
                    <span className="font-medium">Adventure Level:</span>
                    <span className={`badge ${getLevelBadge(adventureLevel)}`}>{adventureLevel}</span>
                </div>
            </div>

            {/* Included Items */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaCampground className="text-purple-500" /> Included Items
                </h2>
                <div className="flex flex-wrap gap-2">
                    {includedItems.map((item, i) => (
                        <span key={i} className="badge badge-outline">{item}</span>
                    ))}
                </div>
            </div>

            {/* Eco-Friendly Features */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-green-700">
                    <FaRecycle /> Eco-Friendly Features
                </h2>
                <div className="flex flex-wrap gap-2">
                    {ecoFriendlyFeatures.map((feature, i) => (
                        <span key={i} className="badge badge-success badge-outline">{feature}</span>
                    ))}
                </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-yellow-600">
                    <FaExclamationTriangle /> Special Instructions
                </h2>
                <ul className="list-disc list-inside bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-900">
                    {specialInstructions.map((note, i) => (
                        <li key={i}>{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ViewBlogs;
