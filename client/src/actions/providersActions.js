import axios from 'axios';
import {
	CALL_PROVIDERS, 
	PROVIDERS_LOADED, 
	FAIL_TO_LOAD_PROVIDERS, 
	CLEAR_FAIL, 
	LOADING_ONE_PROVIDER, 
	CREATE_NEW_PROVIDER, 
	DELETE_PROVIDER, 
	REDIRECTING, 
	CLEAR_FORM
} from '../types/providersTypes';

const TIME_TOAST = 6000;

export const bringProviders = () => async (dispatch) => {
	dispatch ({ type: CALL_PROVIDERS  });

	try {
		const response = await axios.get('/');
		dispatch({ type: PROVIDERS_LOADED, payload: response.data });
	}
	catch(err) {
		dispatch({ tupe: FAIL_TO_LOAD_PROVIDERS, payload: err.message });
	}
};

export const addProviders = (newProvider) => async (dispatch) => {
	dispatch({type: CALL_PROVIDERS });
	try {
		const response = await axios.post('/', newProvider );
		dispatch({ type: CREATE_NEW_PROVIDER, payload: response.data });
		dispatch({ type: CLEAR_FORM });
		window.Materialize.toast( 'A new Provider has been added', TIME_TOAST);
	}
	catch (err) {
    	window.Materialize.toast(`Fail "${err.message}" to add a new Provider. Please try again later.`, TIME_TOAST);
	}
};

export const getOneProvider = (name) => async (dispatch) => {
	dispatch({ type: CALL_PROVIDERS });
	try {
		const response = await axios.get('/');
		dispatch({ type: LOADING_ONE_PROVIDER, payload: response.data[0] });
	}
	catch (err) {
		window.Materialize.toast( 'Fail to load Provider.', TIME_TOAST);

	}
};

export const deleteProvider = (name) => async (dispatch) => {
	dispatch({ type: CALL_PROVIDERS });
	try {
		const response = await axios.get('/');
		response.data.reverse();
		dispatch({ type: FAIL_TO_LOAD_PROVIDERS, payload: name });
	}
	catch (err) {
		window.Materialize.toast(`Fail to "${err.message}" delete provider. Please try again later.`, TIME_TOAST)
	}
};

export const redirectActive = (redirect) => (dispatch) => {
	if ( redirect ) {
		dispatch({ type: CLEAR_FORM });
	}
	dispatch({ type: REDIRECTING, payload: redirect });
};


export const clearForm = () => (dispatch) => dispatch({ type: CLEAR_FORM });

export const clearErr = () => (dispatch) => dispatch({type: CLEAR_FAIL});









