const mongoose = require('mongoose');
const usersMiddleware = require('../middlewares/usersMiddleware');
const User = mongoose.model('users');

// Revisar Conexion
module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send({ message: 'Checkpoint 3 api working' });
	});

// Traer todos los usuarios
	app.get('/api/users', async (req, res) => {
		const users = await User.find({});
		res.send(users)
	});

// Traer usuario por ID
	app.get('/api/users/:id', async (req, res) => {
		const users = await User.find({ _id: req.params.id });
		res.send(users)
	});

// Insertar Usuario
	app.post(
		'/api/users/',
        usersMiddleware.completeData,
        usersMiddleware.primitiveData,
        usersMiddleware.validData,
		async (req, res) => {
		const { name: name, lastName, age, passport, nationality } = req.body;

		const userPost = new User({
			name: name, lastName, age, passport, nationality
		});
		const response = await userPost.save();
		res.send(response);
	});

// Modificar Usuario	
	app.put(  // checar que PUT no cause conflicto con axios
		'/api/users/:id',
        usersMiddleware.completeData,
        usersMiddleware.primitiveData,
        usersMiddleware.validData,
		async (req, res) => {
		const { name: name, lastName, age, passport, nationality} = req.body;
		const response = await User.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ name: name, lastName, age, passport, nationality},
			{ new: true }
		).exec();
		res.send(response);
	});	

	app.delete('/api/users/:id', async (req, res) => {
		const response = await User.deleteOne({ _id: req.params.id });
		res.send(response);
		}
	);
};