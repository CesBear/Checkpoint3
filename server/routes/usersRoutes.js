const mongoose = require('mongoose');
const usersMiddleware = require('../middlewares/usersMiddleware');
const User = mongoose.model('users');

// Revisar Conexion
module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send({ mensaje: 'hola' });
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
		async (req, res) => {
		const { nombre, apellidos, edad, pasaporte, nacionalidad } = req.body;

		const userPost = new User({
			nombre, apellidos, edad, pasaporte, nacionalidad
		});
		const respuesta = await userPost.save();
		res.send(respuesta);
	});

// Modificar Usuario	
	app.put(  // checar que PUT no cause conflicto con axios
		'/api/users/:id', 
		async (req, res) => {
		const { nombre, apellidos, edad, pasaporte, nacionalidad } = req.body;
		const respuesta = await User.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ nombre, apellidos, edad, pasaporte, nacionalidad }, 
			{ new: true }
		).exec();
		res.send(respuesta);
	});	

	app.delete('/api/users/:id', async (req, res) => {
		const respuesta = await User.deleteOne({ _id: req.params.id });
		res.send(respuesta);
		}
	);
};