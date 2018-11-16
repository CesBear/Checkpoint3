const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  product_code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String
});

mongoose.model('products', productsSchema);