const Pool = require("pg").Pool;

const connectionString = `postgres://nurbolot:nOJpQy5zuU0eWBZRRCtgqZD7iwOLTw5S@dpg-ccnuq1ta49940mp3jt5g-a.oregon-postgres.render.com/userdatabse1?ssl=true`;

const db = new Pool({
  connectionString,
});

module.exports = db;
