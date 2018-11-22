const mongoose = require('mongoose');
const { Schema } = mongoose;

const ocSchema = new Schema({
  status: {
    type: String,
    required: true
  },
  products: [
  	{
  		_product_code: { type: Schema.Types.ObjectId, ref: 'products'},
  		_name: { type: Schema.Types.ObjectId, ref: 'providers'},
  		price: Number, 
  		quantity: Number, 
  		subtotal: Number
  	}
  ],
  client: {
    name: String, 
    email: String, 
    address: String, 
    phone: String
  }
  total: Number
});

mongoose.model('oc', ocSchema);