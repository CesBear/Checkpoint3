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


const INITIAL_SATE = {
	providers: [{
		name: {
          type: ''
   		},
        category: {
          type: '',
   		},
        address: '',
        phone: 0,
        rfc: '',
        products: [{
          _id: 0,
          brand: '',
          price: 0,
          stock: 0,
          guarantee: ''
          }]
    }],
    redirect: false,
    err:'',
    loading: false
};

export default ( state = INITIAL_SATE, action ) => {
	const getProvider = (name) => state.providers.findIndex((provider) => {
		return provider._id === name
	});

	switch (action.type) {
		case CALL_PROVIDERS : return { ...state, err:'', loading: true };
		case PROVIDERS_LOADED : return { ...state, err:'', loading: false, providers: action.payload };
		case FAIL_TO_LOAD_PROVIDERS : return { ...state, err: action.payload, loading: false };
		case CLEAR_FAIL : return { ...state, arr:''};
		case LOADING_ONE_PROVIDER : return { ...state, 
											loading: false, 
											name: action.payload.name, 
											address: action.payload.address, 
											phone: action.payload.phone, 
											rfc: action.payload.rfc, 
											category: action.payload.category, 
											products: action.payload.products,
											redirect: false };
		case CREATE_NEW_PROVIDER : return { ...state, loading: false, providers: [action.payload, ...state.providers] };
		case DELETE_PROVIDER : 
			const deleteName = getProvider(action.payload.name)

			if(deleteName >= 0 ) {
				state.providers.splice( deleteName, 1 );
			}
			return { ...state, loading: false }; 
		case REDIRECTING : return { ...state, redirect: action.payload };
		case CLEAR_FORM : return { ...state, 
									providers: [{
										name: {
								          type: ''
								   		},
								        category: {
								          type: '',
								   		},
								        address: '',
								        phone: 0,
								        rfc: '',
								        products: [{
								          _id: 0,
								          brand: '',
								          price: 0,
								          stock: 0,
								          guarantee: ''
								          }],
								        redirect: false,
								        err:'',
								        loading: false
									}]	
		};
		case MODIFIED_PROVIDER:
	      const idModificado = getProvider(action.payload._id);
	      if (idModificado >= 0) {
	        state.providers.splice(idModificado, 1, action.payload);
	      }
	      return { ...state, loading: false };

	    case ADD_NAME: return { ...state, name: action.payload };
	    case ADD_ADDRESS: return { ...state, address: action.payload };
	    case ADD_PHONE: return { ...state, phone: action.payload };
	    case ADD_RFC: return { ...state, rfc: action.payload };

		default: return state;
	}
}

