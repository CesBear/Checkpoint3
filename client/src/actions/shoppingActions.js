import axios from 'axios';
import {LLAMAR, EXITOSO, FALLO, PRIMER_GET} from '../types/shoppingTypes';


export const traerArtistas = () => async (dispatch) => {

    dispatch({ type: LLAMAR });

    try {
        const response = await axios.get('https://g2-ch2.herokuapp.com/api/providers/products');
        response.data.sort();
        dispatch({ type: EXITOSO, payload: response.data });
        dispatch({ type: PRIMER_GET});
    }
    catch(err) {
        dispatch({ type: FALLO, payload: err.message });
    }
};
