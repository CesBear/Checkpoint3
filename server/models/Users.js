const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   nombre: {
      type: String,
      required: true
   },
   apellidos: {
      type: String,
      required: true
   },
   edad: String,
   pasaporte: String,
   nacionalidad: String,
   create_date: {
      type: Date,
      default: Date.now
   }
});

mongoose.model('users', userSchema);