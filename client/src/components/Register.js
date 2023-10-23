import React, { useState } from 'react';

function Register  ()  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending registration data to the backend
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Create an Account</h2>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600"
              type="email" 
              required 
              id="email" 
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input 
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600"
              type="password" 
              required 
              id="password" 
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <button 
              type="submit" 
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;