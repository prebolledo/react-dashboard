import React from 'react';
import './style.css';

function View(props){
    const {title, ventas} = props;

    return (
        <section className="ventasMensuales">
            <h1>{ title }</h1>
            <ul>
                {ventas.map((venta, index) =>{
                    return (
                        <li key={index}>
                            <div className="Mes">{venta.mes.nombre}</div>
                            <ol>
                                {venta.productos.map((producto, indexProducto) =>{
                                    return(
                                        <li key={venta.mes.id+'-'+indexProducto}>
                                            Producto: {producto.nombre}, 
                                            Cantidad: {producto.cantidad},
                                             Monto: {producto.monto}
                                        </li>
                                    );
                                })}
                            </ol>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default View;