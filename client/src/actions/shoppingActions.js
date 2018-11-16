import axios from 'axios';
import {LLAMAR, EXITOSO, FALLO, PRIMER_GET} from '../types/shoppingTypes';


export const desplegarProductos = () => async (dispatch) => {

    dispatch({ type: LLAMAR });

    try {
        const response = await axios.get('https://g2-ch2.herokuapp.com/api/providers/products');
        response.data.reverse();
        dispatch({ type: EXITOSO, payload: response.data });
        dispatch({ type: PRIMER_GET});
    }
    catch(err) {
        dispatch({ type: FALLO, payload: err.message });
    }
};

const desplegarProveedores = () => async (dispatch) => {

    dispatch({type: LLAMAR});

    try {
        const response = await axios.get('https://g2-ch2.herokuapp.com/api/providers');
        response.data.reverse();
        dispatch({ type: EXITOSO, payload: response.data.providers });
        dispatch({ type: PRIMER_GET});
    }
    catch(err) {
        dispatch({type: EXITOSO, payload: response.data });
    }
};

const agrgarProductosAlCarrito = () => async (dispatch) =>{
    try {
        const response = await axios.get('https://g2-ch2.herokuapp.com/api/providers');
        response.data.reverse();
        dispatch({ type: EXITOSO, payload: response.data.providers });
        dispatch({ type: PRIMER_GET});
    }
    catch(err) {
        dispatch({type: EXITOSO, payload: response.data });
    }
};