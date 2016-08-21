const clothes = require('../server/models/clothes');
const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myChestTest';

describe('clothes',function(){

  it('clothes',function(){
    clothes.findAll(url,function(result){
      expect(result).to.be.deep.equal({});
    });
  });
});
