import axios from 'axios';
import { NEW_FORM, 
	     FAIL_PROVIDERS, 
	     CLEAR_FAIL, 
	     START_PROVIDERS, 
	     LOADING_PROVIDERS, 
	     NEW_PROVIDERS, 
	     LOADING_ONE_PROVIDER, 
	     DELETE_PROVIDER, 
	     SHOW_ERR,
	     ADD_NAME, 
	     ADD_CATEGORY,
	     ADD_RFC,
	     ADD_ADDRESS,
	     ADD_PHONE }from '../types/providersTypes.js';

const TIME_TOAST = 4000;

export const LoadProviders = () => async (dispatch) => {
	dispatch ({ type: START_PROVIDERS });
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		response.data.reverse();
		dispatch({ type: LOADING_PROVIDERS, payload: response.data });
	}
	catch (err) {
		dispatch({ type: FAIL_PROVIDERS, payload: err })
	}
};

export const AddProviders = (newProvider) => async (dispatch) => {
	dispatch({ type: START_PROVIDERS });
	try {
		const response = await axios.post('https://jsonplaceholder.typicode.com/users', newProvider);
		dispatch({ type: NEW_PROVIDERS, payload: response.data });
		dispatch({ type: NEW_FORM });
		window.Materialize.toast('Provider Added', TIME_TOAST);
	}
	catch (err) {
		window.Materialize.toast(`Fail "${err.message}" to add provider.`, TIME_TOAST);
	}
};

export const getProviders = (name) => async (dispatch) => {
	dispatch({ type: START_PROVIDERS });
	try{
		const response = await axios.get(`https://g2-ch2.herokuapp.com/api/usuarios/red/${name}`);
		dispatch({ type: LOADING_ONE_PROVIDER, payload: response.data })
	}
	catch (err) {
		window.Materialize.toast(`Unable to "${err.message}" load Provders`, TIME_TOAST);
	}
};

export const eraseProvider = (name) => async (dispatch) => {
	dispatch( {type: START_PROVIDERS} );
	try{
		await axios.delete(`https://g2-ch2.herokuapp.com/api/usuarios/red/${name}`);
		dispatch({ type: DELETE_PROVIDER, payload: name });
	}
	catch (err) {
		window.Materialize.toast(`Unable to "${err.message}" delete Provider`, TIME_TOAST);
	}
};
export const showErr = () => (dispatch) => dispatch({ type: SHOW_ERR });

export const newForm = () => (dispatch) => dispatch({ type: NEW_FORM });

export const clearFail = () => (dispatch) => dispatch({ type: CLEAR_FAIL });

export const addName = (name) => (dispatch) => {
	dispatch({ type: ADD_NAME, payload: name });
};

export const addCategory = (category) => (dispatch) => {
	dispatch({ type: ADD_CATEGORY, payload: category });
};

export const addRfc = (rfc) => (dispatch) => {
	dispatch({ type: ADD_RFC, payload: rfc });
};

export const addAddress = (address) => (dispatch) => {
	dispatch({ type: ADD_ADDRESS, payload: address });
};
export const addPhone = (phone) => (dispatch) => {
	dispatch({ type: ADD_PHONE, payload: phone });
};












