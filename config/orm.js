// import MySQL connection
const connection = require('../config/connection');

// helper function for MySQL
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i <num; i++) {
arr.push('?');    
  }
  return arr.toString();
}

// helper function to covert object key/value to SQL syntax
function objToSql(ob) {
  let arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in object) {
    var value = ob[key];
    // vheck to skip hidden properties
    if (object.hasOwnProperty(ob, key)) {
      // if string w/ spaces, add quotations
     if (typeof value === 'string' && value.indexOf(" ") >= 0) {
    }
    arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// object for all SQL statement functions
const orm = {
  all: function (tableInput, cb) {
    var queryString = 'INSERT INTO ' + table;
    
    queryString += ' (';
    queryString += close.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, function(err, res){
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  // an example of objColVals would be {name: killer burger, devoured: true}
  update: function(table, objColVals, condidtion, cb) {
    var queryString = 'UPDATE'+ table;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condidtion;

    console.log(queryString);
     connection.query(queryString, function(err, res){
       if (err) {
         throw err;
       }
       cb(res);
     });
  },
  delete: function (table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, res){
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

// export orm object for model (burger.js)
module.exports = orm;