const Pool = require("pg").Pool;

const db = new Pool({
  user: "postgres",
  host: "localhost",
  post: 5432,
  password: "hello1234",
  database: "users",
});

module.exports = db;
