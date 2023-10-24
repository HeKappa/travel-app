const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Setup connection pool with PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL  // ensure this variable is in your .env file
});

pool.on('connect', () => {
  console.log('Connected to the db');
});

/**
 * Register a new user
 * @param {Object} req - Express request object with user details in body
 * @param {Object} res - Express response object
 */
const registerUser = async (req, res) => {
  // Get user input
  const { name, email, password } = req.body;

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if user already exists
    const userCheckQuery = 'SELECT * FROM users WHERE email = $1';
    const userCheck = await pool.query(userCheckQuery, [email]);

    if (userCheck.rows.length > 0) {
      return res.status(400).send('User already exists');
    }

    // Insert user into the database
    const registerUserQuery = `
      INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;
    const newUser = await pool.query(registerUserQuery, [name, email, hashedPassword]);

    // You might want to create a token or handle login here as well.
    return res.status(201).send(newUser.rows[0]);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  registerUser
};