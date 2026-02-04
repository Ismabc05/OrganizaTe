import React from "react";
import { TodoContext } from "../context/context";
import "../estilos/mensaje.css";

function Mensaje () {
     const {totalProductos, productosCompletados} = React.useContext(TodoContext);

     return(
         <div className="contenedor-mensaje"><p className="mensaje">Has completado <span className="color">{productosCompletados}</span> de <span className="color">{totalProductos}</span> tareas</p></div>
     )
}


export {Mensaje}