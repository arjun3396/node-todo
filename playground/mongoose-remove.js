const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({})
//   .then((result) => {
//     console.log(result);
//   });
//
// Todo.findOneAndRemove({ })

Todo.findByIdAndRemove('5bf39ef581843a8a55d15f62')
  .then((todo) => {
    console.log(todo);
  })
