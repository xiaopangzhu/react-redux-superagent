const clothes = require('../server/models/clothes');
const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myChestTest';

describe('clothes',function(){

  it('clothes',function(){
    clothes.findAll(function(result){
      expect(result).to.be.deep.equal([{"_id":0,"userName":"mahong","password":"123456","clo_list":[{"c_id":0,"season":"summer","color":"red","sort":"coat","style":"fashion","image":"0","matches":[]},{"c_id":1,"season":"summer","color":"yellow","sort":"coat","style":"fashion","image":"1","matches":[]},{"c_id":2,"season":"summer","color":"blue","sort":"pants","style":"simple","image":"2","matches":[]},{"c_id":3,"season":"summer","color":"white","sort":"pants","style":"simple","image":"3","matches":[]}]}]);
    });
  });
});
