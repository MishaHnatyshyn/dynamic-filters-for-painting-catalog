'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://ROSART:ROSART399@ds111072.mlab.com:11072/rosart';
let mydb;

const dbConnect = () => {
  MongoClient.connect(url, (err, database) => {
    if (err) throw err;
    mydb = database.db('rosart');
    console.log('data base connected!');
    module.exports.mydb = mydb;
  });
};


module.exports.dbConnect = dbConnect;
