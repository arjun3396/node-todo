//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
  return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodosApp');

  // db.collection('Todos').deleteMany({text : 'milk the dog'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text : 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name : 'Arjun'});

  //client.close();
});
