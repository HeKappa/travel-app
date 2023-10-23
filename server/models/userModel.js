const pool = require('../database');

class User {
    // Constructor to initialize object with data
    constructor(data) {
        this.username = data.username;
        this.email = data.email;
        this.password = data.password; // Note: In production, ensure passwords are hashed before storing
    }

    // Save the user data in the database
    async save() {
        try {
            const result = await pool.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
                [this.username, this.email, this.password]
            );
            return result.rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // Find a user by email in the database (useful for authentication)
    static async findByEmail(email) {
        try {
            const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            return result.rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // ... other useful methods like update, delete, etc.
}

module.exports = User;