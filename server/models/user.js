var mongoose = require('mongoose');
var User = mongoose.model('User', {
  email : {
    type : String,
    required : true,
    minLength : 1,
    trim : true
  }
});

// var user = new User({
//   email : 'arjun@dowtoear.com '
// });
//
// user.save()
//   .then((doc) => {
//     console.log('Saved user', doc);
//   }, (e) => {
//     console.log('Unable to save', e);
//   });

module.exports = {
  User
};
