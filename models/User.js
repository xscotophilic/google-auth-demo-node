const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
  googleID: String,
});

mongoose.model('users', userSchema);
