const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.DB_CONNECTION;

const db = new Pool({
  connectionString,
});

module.exports = db;
