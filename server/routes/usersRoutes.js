const mongoose = require('mongoose');
const usersMiddleware = require('../middlewares/usersMiddleware');
const User = mongoose.model('users');

// Check Conection 
module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send({ message: 'Checkpoint 3 api working' });
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
        usersMiddleware.datosCompletos,
        usersMiddleware.datosPrimitivos,
    	usersMiddleware.datosValidos,
		async (req, res) => {
<<<<<<< HEAD
		const { name: name, lastName, age, passport, nationality } = req.body;
=======
		const { name, lastName, age, passport, nationality, reservations } = req.body;
>>>>>>> 32247154a6c977fadea23f816a2206ec03eb1791

		const userPost = new User({
			name: name, lastName, age, passport, nationality
		});
		const response = await userPost.save();
		res.send(response);
	});

// Update User
	app.put(  // checar que PUT no cause conflicto con axios
		'/api/users/:id',
        usersMiddleware.datosCompletos,
        usersMiddleware.datosPrimitivos,
        usersMiddleware.datosValidos,
		async (req, res) => {
<<<<<<< HEAD
		const { name: name, lastName, age, passport, nationality} = req.body;
		const response = await User.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ name: name, lastName, age, passport, nationality},
=======
		const { name, lastName, age, passport, nationality, reservations } = req.body;
		const response = await User.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ name, lastName, age, passport, nationality, reservations }, 
>>>>>>> 32247154a6c977fadea23f816a2206ec03eb1791
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