// import axios from 'axios';
// import { USER_CALL, USER_SUCCESS, USER_FAILURE } from '../types/usersTypes';

// export const traerUsuarios = () => async (dispatch) =>
// {
// 	dispatch({ type: USER_CALL });

// 	try {
// 		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
// 		dispatch({ type: EXITOSO, payload: response.data });
// 	}
// 	catch(error) {
// 		dispatch({ type: FALLO, payload: error.message });
// 	}
// };

// export const cambioNombre = (nombre) => (dispatch) =>
// {
// 	dispatch({ type: 'cambio_nombre', payload: nombre });
// };