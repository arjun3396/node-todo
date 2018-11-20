var mongoose = require('mongoose');
export MONGOLAB_URI= 'mongodb://admin:useadmin@ds245512.mlab.com:45512/testing';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
