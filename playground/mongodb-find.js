//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
  return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodosApp');

  // db.collection('Todos').find({
  //   _id : new ObjectID('5bf15fbfdeda1ea17ade8570')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count : ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch');
  // });

  db.collection('Users').find({
    name : 'Arjun'
  }).toArray().then((docs) => {
    console.log('Usersat');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch');
  });

  //client.close();
});
