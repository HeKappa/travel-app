import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link to="/">TravelApp</Link>
                </div>
                <div className="flex space-x-4">
                    <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
                    <Link className="text-gray-300 hover:text-white" to="/destinations">Destinations</Link>
                    <Link className="text-gray-300 hover:text-white" to="/login">Login</Link>
                    {/* You can add additional links here for other pages you might have */}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;