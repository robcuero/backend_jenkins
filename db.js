const { Pool } = require('pg');
require('dotenv').config()
console.log(process.env.POSTGRES_PASSWORD);
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.DB_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
});

module.exports = pool;
