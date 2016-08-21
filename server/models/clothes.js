const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myChest';

exports.findAll = function(callback){
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('clothes');
    collection.find({}).toArray(function (err, docs) {
      callback(docs);
    });
  });
};
