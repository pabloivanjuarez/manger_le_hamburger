const express = require('express');
const router = express.Router();

// import burger model
const burger = require("../models/burger.js");

//create routes/ set up logic within routes, where needed
router.get('/', function(req, res){
  burger.all(function(data){
    var hbsObject={
      burgers: data
    };
    res.render('index', hbsObject);
  });
});


// recall all burgers
router.post('/api/plate', function(req,res) {
  burger.create(['burger_name'], [req.body.name], function(result){
    res.json({ id: result.insertId}); 
  });
});

// change burger status function
router.put('/api/plate/:id', function(req,res){
  var condition = 'id = ' + req.params.id;

  burger.update({
    devoured: req.body.devoured,
  }, condition,
    function (result){
      if (result.changedRows == 0) {
        return res.status(4040).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
 
//  rm burger function
router.delete('/api/plate/:id', function(req,res){
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, function (result){
    if (result.affectedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//  export routes for server use
module.exports = router;