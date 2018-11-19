const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bf28de6fe8e4f094b0acd4a';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos' , todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo' , todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// });

var id = '5bf259e21f2ae80529608342';

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User id', user);
}).catch((e) => console.log(e));
