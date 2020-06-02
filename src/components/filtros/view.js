import React from 'react';
import './style.css';

function View(props){
    const { meses, handleCambiarMes } = props;

    return (
        <section className="filtros">
            <h1>Filtros</h1>
            <select onChange={handleCambiarMes}>
                <option value="0">Mes</option>
                {meses.map(mes => {
                    return (
                    <option value={mes.id} key={mes.id}>{mes.nombre}</option>
                    );
                })}
            </select>
        </section>
    );
};

export default View;