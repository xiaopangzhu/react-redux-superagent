const clothes = require('../models/clothes');

exports.findAll = function(req,res){
  clothes.findAll(function(result){
    res.json(result).end();
  });
};
