import React, { useState, useEffect } from 'react';

function DestinationList() {
  // This data is placeholder data. In a real app, you might fetch this data from an API.
  const destinations = [
    { name: "New York", description: "The city that never sleeps." },
    { name: "Paris", description: "City of lights." },
    { name: "Tokyo", description: "Experience tradition and modernity." }
    // Add as many destinations as you prefer.
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{destination.name}</h3>
            <p className="text-gray-600">{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DestinationList;