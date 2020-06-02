import React, { useContext } from 'react';
import {Context, ActionType} from '../../store';
import View from './view';

import { getMeses } from  './helpers';

function Filtros(){
    const meses = getMeses();
    const dispatch = useContext(Context)[1];

    const handleCambiarMes = (event) => {
        dispatch({
            type: ActionType.CAMBIAR_MES,
            mes: parseInt(event.target.value),
        });
    };

    return (
        <View meses = {meses} handleCambiarMes = {handleCambiarMes} />
    );
};

export default Filtros;