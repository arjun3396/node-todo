//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
  return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodosApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5bf24f10a47c521ebc4a20a1")
  // }, {
  //   $set : {
  //     completed : true
  //   }
  // }, {
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5bf15aead09089033c7fb0b8')
  }, {
    $set : {
      name : 'Arjun'
    },
    $inc : {
      age : 1
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })


  //client.close();
});
