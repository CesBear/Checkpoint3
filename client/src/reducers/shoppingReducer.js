import { LLAMAR, EXITOSO, FALLO } from "../types/shoppingTypes";

const INITIAL_STATE = {
    artistas: [],
    cargando: false,
    error: '',
    nombre: ''
};

export default (state = INITIAL_STATE, action) =>
{
    switch (action.type)
    {
        case LLAMAR : return { ...state, error: '', cargando: true };
        case EXITOSO : return { ...state, error: '', cargando: false, artistas: action.payload };
        case FALLO : return { ...state, error: action.payload, cargando: false };
        default: return state;
    }
}