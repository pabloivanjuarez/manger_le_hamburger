// set up MySQL connection
const mysql=require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'ceo',
  password: 'leboss321',
  database: 'burger_db'
});

// make connection
connection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
  return;  
  }
  console.log('connected as id ' + connection.threadId);
});

// export connection 
module.exports = connection;