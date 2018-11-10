import { USER_CALL, USER_SUCCESS, USER_FAILURE } from '../types/usersTypes';

const INITIAL_STATE = {
	users: [],
	loading: false,
	error: '',
	name: '', 
	lastName: '',
	age: '',
	passport: '',
	nationality: '',
	reservations: [],
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case USER_CALL: return { ...state, error: '', cargando: true };
		case USER_SUCCESS: return { ...state, error: '', cargando: false, usuarios: action.payload };
		case USER_FAILURE: return { ...state, error: action.payload, cargando: false };
		default: return state;
	}
}