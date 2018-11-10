const mongoose = require('mongoose');
const usersMiddleware = require('../middlewares/usersMiddleware');
const User = mongoose.model('users');

// Check Conection 
module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send({ mensaje: 'hola' });
	});

// All Users
	app.get('/api/users', async (req, res) => {
		const users = await User.find({});
		res.send(users)
	});

// User by ID
	app.get('/api/users/:id', async (req, res) => {
		const users = await User.find({ _id: req.params.id });
		res.send(users)
	});

// Insert User
	app.post(
		'/api/users/', 
		async (req, res) => {
		const { name, lastName, age, passport, nationality, reservations } = req.body;

		const userPost = new User({
			nombre, apellidos, edad, pasaporte, nacionalidad
		});
		const response = await userPost.save();
		res.send(response);
	});

// Update User
	app.put(  // checar que PUT no cause conflicto con axios
		'/api/users/:id', 
		async (req, res) => {
		const { name, lastName, age, passport, nationality, reservations } = req.body;
		const response = await User.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ name, lastName, age, passport, nationality, reservations }, 
			{ new: true }
		).exec();
		res.send(response);
	});	

// Delete User
	app.delete('/api/users/:id', async (req, res) => {
		const response = await User.deleteOne({ _id: req.params.id });
		res.send(response);
		}
	);
};