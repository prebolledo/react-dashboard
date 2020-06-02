import ActionType from './actionType';

const Reducer = (state, action) => {

    switch(action.type){
        case ActionType.CAMBIAR_MES: {
            const mes = action.mes;
            return {
                ...state,
                mesSeleccionado: mes,
            }
        }
        default: {
            return state;
        }
    }

};

export default Reducer;