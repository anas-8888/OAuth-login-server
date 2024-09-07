const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      firstName: {
            type: String,
            required: true
      },
      lastName: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            validate: [validator.isEmail, 'Invalid email']
      },
      thumbnail: {
            type: String,
      },
      googleId: {
            type: String,
            required: true,
            unique: true
      },
});

module.exports = mongoose.model('user', userSchema);