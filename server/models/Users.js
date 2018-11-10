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
<<<<<<< HEAD
    reservations: [],
=======
   reservations: [
      {
         flight: {type: Number, default: 0 },
         seat: {type: Number, default: 0 }
      }
   ]
>>>>>>> 32247154a6c977fadea23f816a2206ec03eb1791
   create_date: {
      type: Date,
      default: Date.now
   }
});

mongoose.model('users', userSchema);