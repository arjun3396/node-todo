//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
  return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodosApp');

  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Arjun',
  //   age : 22,
  //   loc : 'bangalore'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});
