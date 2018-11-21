const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
// 
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//
//   });
// });

var hashedPassword = '$2a$10$9XPOjZMCWnTz96IwRZZ/2OPFVzhJFjPkeJ8SMyA7kz4pOEHJ6MiKm';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
//
// var data = {
//   id : 10
// };
//
// var token = jwt.sign(data, '123Abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123Abc');
// console.log('Decoded',decoded);
// var message = 'I am user no 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash : ${hash}`);
//
// var data = {
//   id : 4
// };
//
// var token = {
//   data,
//   hash : SHA256(JSON.stringify(data) + 'something').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'something').toString();
//
// if(resultHash === token.hash){
//   console.log('data is not change');
// } else {
//   console.log('data is changed');
// }
