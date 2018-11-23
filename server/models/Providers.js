const mongoose = require('mongoose');
const { Schema } = mongoose;

const providersSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true
   },
   address: String,
    phone: Number,
   rfc: String,
    products: [
        {
        _id: Number,
        brand: String,
        price: Number,
        stock: Number,
        guarantee: String
        }
    ],
   create_date: {
      type: Date,
      default: Date.now
   }
});

mongoose.model('providers', providersSchema);