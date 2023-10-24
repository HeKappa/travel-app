import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending login data to the backend
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Login to Your Account</h2>
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
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 align:center" href="#">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;