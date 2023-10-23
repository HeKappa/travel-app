const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Get destination suggestions
router.get('/suggestions', destinationController.getSuggestions);

// Post a new destination
router.post('/', destinationController.createDestination);

// ... other routes for updating, deleting, etc.

module.exports = router;