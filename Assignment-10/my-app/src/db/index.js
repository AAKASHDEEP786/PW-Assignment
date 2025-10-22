const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL // e.g. postgres://testuser:testpass@localhost:5432/testdb
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
