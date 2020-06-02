import React from 'react';
import './style.css';

function View(props){
    const { meses, handleCambiarMes } = props;

    return (
        <section className="Filtros">
            <h1>Filtros</h1>
            <div className="Contenedor">
                <select onChange={handleCambiarMes}>
                    <option value="0">Mes</option>
                    {meses.map(mes => {
                        return (
                        <option value={mes.id} key={mes.id}>{mes.nombre}</option>
                        );
                    })}
                </select>
            </div>
        </section>
    );
};

export default View;