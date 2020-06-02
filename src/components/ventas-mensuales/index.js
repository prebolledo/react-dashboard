import React, { useContext, useState, useEffect } from 'react';
import {Context} from '../../store';
import View from './view';
import { ventanMes } from '../../services/ventas'

function VentasMensuales(){

    const [state] = useContext(Context);
    const [ventas, setVentas] = useState([]);
    const [ventasFiltradas, setVentasFiltradas] = useState([]);

    if(ventas.length === 0){
        ventanMes((ventas)=>{
            setVentas(ventas);
            setVentasFiltradas(ventas);
        },(error)=>{
            console.log(error);
        });
    }

    useEffect(() => {

        if(state.mesSeleccionado !== 0){
            setVentasFiltradas(ventas.filter(venta => venta.mes.id === state.mesSeleccionado));
        }else{
            setVentasFiltradas(ventas);
        }

    },[setVentasFiltradas, ventas, state]);


    return (
        <View title="Ventas Mensuales" ventas={ ventasFiltradas } />
    );
};

export default VentasMensuales;