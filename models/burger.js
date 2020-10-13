// inport the orm, create functions for db interaction
var orm = require('../config/orm.js');

const burger = {
  all: function (cb) {
    orm.all('plate', function (res){
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create('plate', cols, vals, function (res){
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update('plate', objColVals, condition, function (res){
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('plate', condition, function (res){
      cb(res);
    });
  }
};

//export db functions for controller to use
module.exports = burger;