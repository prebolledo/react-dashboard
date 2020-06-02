import React, { createContext, useReducer } from 'react';
import ActionType from './actionType';
import Reducer from './reducer';

const estadoInicial = {
    mesSeleccionado: 0
}; 

const Context = createContext(estadoInicial);

function Store({children}){

    const [state, dispatch] = useReducer(Reducer, estadoInicial);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
} 

export {
    ActionType,
    Context,
}

export default Store;