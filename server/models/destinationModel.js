const pool = require('../database');

class Destination {
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        // other properties...
    }

    async save() {
        try {
            const result = await pool.query(
                'INSERT INTO destinations (name, description) VALUES ($1, $2) RETURNING *',
                [this.name, this.description]
            );
            return result.rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async findAll() {
        try {
            const result = await pool.query('SELECT * FROM destinations');
            return result.rows;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // ... other methods like findById, update, delete, etc.
}

module.exports = Destination;