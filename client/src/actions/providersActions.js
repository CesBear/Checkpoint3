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
	CLEAR_FORM,
	MODIFIED_PROVIDER,
	ADD_NAME,
	ADD_ADDRESS,
	ADD_PHONE,
	ADD_RFC
} from '../types/providersTypes';

const TIME_TOAST = 6000;

export const bringProviders = () => async (dispatch) => {
	dispatch ({ type: CALL_PROVIDERS  });

	try {
		const response = await axios.get('http://localhost:5000/api/providers');
		dispatch({ type: PROVIDERS_LOADED, payload: response.data });
	}
	catch(err) {
		dispatch({ tupe: FAIL_TO_LOAD_PROVIDERS, payload: err });
	}
};

export const addProviders = (newProvider) => async (dispatch) => {
	dispatch({type: CALL_PROVIDERS });
	try {
		const response = await axios.post('http://localhost:5000/api/providers', newProvider );
		dispatch({ type: CREATE_NEW_PROVIDER, payload: response.data });
		dispatch({ type: CLEAR_FORM });
		window.Materialize.toast( 'A new Provider has been added', TIME_TOAST);
	}
	catch (err) {
    	window.Materialize.toast(`Fail "${err.message}" to add a new Provider. Please try again later.`, TIME_TOAST);
	}
};

export const getOneProvider = (id) => async (dispatch) => {
	dispatch({ type: CALL_PROVIDERS });
	try {
		const response = await axios.get('http://localhost:5000/api/providers');
		dispatch({ type: LOADING_ONE_PROVIDER, payload: response.data[0] });
	}
	catch (err) {
		window.Materialize.toast( 'Fail to load Provider.', TIME_TOAST);

	}
};

export const modifyProvider = ( id, providerUpdated ) => async(dispatch) => {
	dispatch ({ type: CALL_PROVIDERS });
	try{
		const response = await axios.post('http://localhost:5000/api/providers', providerUpdated);
		dispatch({ type: MODIFIED_PROVIDER });
		dispatch({ type: CLEAR_FORM });
		dispatch({ type: REDIRECTING, payload: true });
		window.Materialize.toast('Provider has been modified', TIME_TOAST);
	}
	catch (err){
		window.Materialize.toast(`Error "${err.message}" al modificar este usuario. Intente más tarde.`, TIME_TOAST);
	}
};

export const deleteProvider = (id) => async (dispatch) => {
	dispatch({ type: CALL_PROVIDERS });
	try {
		const response = await axios.delete('http://localhost:5000/api/providers');
		response.data.reverse();
		dispatch({ type: DELETE_PROVIDER, payload: id });
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

export const addName = (name) => (dispatch) => {
	dispatch({ type: ADD_NAME, payload: name });
};

export const addAddress = (address) => (dispatch) => {
	dispatch({ type: ADD_ADDRESS, payload: address });
};

export const addPhone = (phone) => (dispatch) => {
	dispatch({ type: ADD_PHONE, payload: phone });
};

export const addRFC = (rfc) => (dispatch) => {
	dispatch({ type: ADD_RFC, payload: rfc });
};






