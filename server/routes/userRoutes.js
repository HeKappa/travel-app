const express = require('express');
const router = express.Router();
// Import the user controller
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// User profile
router.get('/profile', userController.getUserProfile);

// ... other routes like update profile, etc.

module.exports = router;