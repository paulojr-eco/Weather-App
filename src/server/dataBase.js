const dbPool = require("pg").Pool;

var pool = new dbPool({
  user: "postgres",
  host: "localhost",
  database: "tech4humans",
  password: "123456", //insira sua senha aqui
  port: 5432,
});

pool.connect();
let query = "CREATE TABLE IF NOT EXISTS history "+
  "(id SERIAL NOT NULL PRIMARY KEY, " +
  "city VARCHAR(20) NOT NULL, " +
  "temperature NUMERIC(4,2) NOT NULL, " +
  "temperature_max NUMERIC(4,2) NOT NULL, " +
  "temperature_min NUMERIC(4,2) NOT NULL, " +
  "weather TEXT NOT NULL, " +
  "icon TEXT NOT NULL)";
pool.query(query, (err, res) => {
  console.log(err,res);
});

module.exports = {
  pool
};
