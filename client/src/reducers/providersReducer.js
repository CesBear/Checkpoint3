import { 
	NEW_FORM, 
	FAIL_PROVIDERS,
	CLEAR_FAIL,
	START_PROVIDERS,
	LOADING_PROVIDERS,
	NEW_PROVIDERS,
	LOADING_ONE_PROVIDER,
	NAME,
	CATEGORY,
	ADDRESS,
	PHONE,
	RFC
	 } from '../types/providersTypes.js';

const INITIAL_STATE = {
	name: {
      type: '',
   		},
   category: {
      type: '',
   		},
   address: '',
   phone: 0,
   rfc: '',
    products: [
        {
        _id: 0,
        brand: '',
        price: 0,
        stock: 0,
        guarantee: ''
        }
    	],
    redirect: false
};

export default (state = INITIAL_STATE, action) => {
	const providersList = (name) => state.name.findIndex((name) =>{
		return name 
	});

switch ( action.type) {
	case NAME: return { ...state, name: action.payload };
	case CATEGORY: return { ...state, category: action.payload };
	case ADDRESS: return { ...state, address: action.payload };
	case PHONE: return { ...state, phone: action.payload };
	case RFC: return { ...state, rfc: action.payload };
	case NEW_FORM: return {
		...state,
		name: {
	      type: '',
	   		},
	   	loading: false,
	    category: {
	      type: '',
	   		},
	    address: '',
	    phone: 0,
	    rfc: '',
	    products: [
	        {
	        _id: 0,
	        brand: '',
	        price: 0,
	        stock: 0,
	        guarantee: ''
	        }
	    	],
	    redirect: false
		};
	case FAIL_PROVIDERS:
		console.log(action.payload);
		return { ...state, err: action.payload, loading: false};

	case CLEAR_FAIL: 
		return { ...state, err:''};

	case START_PROVIDERS: return {
		...state,
		err:'',
		loading: true
		};

	case LOADING_PROVIDERS: return {
		...state,
		loading: false,
		name: action.payload,
		address: action.payload.address,
		phone: action.payload.phone,
		rfc: action.payload.rfc,
		category: action.payload.category
	};

	case NEW_PROVIDERS: return {
		...state,
		loading: false,
		name: [action.payload, ...state.providers]
	};

	case LOADING_ONE_PROVIDER: return {
		...state,
		loading: false,
		name: action.payload.name,
		address: action.payload.address,
		phone: action.payload.phone,
		rfc: action.payload.rfc,
		category: action.payload.category
	};



	default: return state;
	}
}








