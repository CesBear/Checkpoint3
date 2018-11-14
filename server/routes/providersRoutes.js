const mongoose = require('mongoose');
const providersMiddleware = require('../middlewares/providersMiddleware');
const Providers = mongoose.model('providers');

// Revisar Conexion
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({ message: 'Checkpoint 3 api working' });
    });


    app.get('/api', (req, res) => {
        res.send({ message: 'Api is loading' });
    });


	app.get('/api/providers', async (req, res) => {
		const providers = await Providers.find({});
		res.send(providers)
	});


	app.get('/api/providers/:id', async (req, res) => {
		const providers = await Providers.find({ _id: req.params.id });
		res.send(providers)
	});


	app.post(
		'/api/providers/',
        providersMiddleware.completeData,
        providersMiddleware.primitiveData,
        providersMiddleware.validData,
        providersMiddleware.validateProducts,

		async (req, res) => {
		const { name, category, address, phone, rfc, products } = req.body;

		const providersPost = new Providers({
			name,
            category,
			address,
			phone,
			rfc,
			products
		});
		const response = await providersPost.save();
		res.send(response);
	});


	app.put(
		'/api/providers/:id',
        providersMiddleware.completeData,
        providersMiddleware.primitiveData,
        providersMiddleware.validData,
        providersMiddleware.validateProducts,
		async (req, res) => {
		const { name, category, address, phone, rfc, products} = req.body;
		const response = await Providers.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ name, category, address, phone, rfc, products},
			{ new: true }
		).exec();
		res.send(response);
	});	

	app.delete('/api/providers/:id', async (req, res) => {
		const response = await Providers.deleteOne({ _id: req.params.id });
		res.send(response);
		}
	);
};