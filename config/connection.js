// set up MySQL connection
const mysql=require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'ceo',
  password: 'leboss321',
  database: 'burger_db'
});