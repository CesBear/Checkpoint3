const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   age: Number,
   passport: String,
   nationality: String,
    reservations: [],
   create_date: {
      type: Date,
      default: Date.now
   }
});

mongoose.model('users', userSchema);