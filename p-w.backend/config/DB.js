

const mysql = require('mysql2');
const dotnev = require('dotenv');
dotnev.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ', connection.threadId);
});

module.exports = connection;