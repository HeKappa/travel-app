import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import DestinationList from './components/DestinationList';

function App() {
  return (
    <Router>
      <div>
        <Navigation />{/* You can add a navigation bar or header here if you want */}

        {/* The main content will change based on the route */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/destinations" element={<DestinationList />} />
          {/* You can add a default route for 404 - page not found */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;