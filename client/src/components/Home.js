import React from 'react';

function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-blue-50">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Travel App</h1>
            <p className="text-lg mb-6">Explore the world's best destinations with us!</p>
            <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Discover More
            </button>
        </div>
    );
}

export default Home;