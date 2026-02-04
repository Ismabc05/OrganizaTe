import React from "react";
import "../estilos/form.css";
import { TodoContext } from "../context/context"

function Form () {

    const { openModal, setOpenModal, añadirTarea} = React.useContext(TodoContext);
    const [guardarInfo, setGuardarInfo ] = React.useState("");

    const cerrarModal = () => {
        setOpenModal(!openModal);
    }

    const guardarTexto = (event) => {
        setGuardarInfo(event.target.value);
    }



    return (
        <form className="form">
            <label className="label"> Escribe una tarea:</label>
            <textarea value={guardarInfo} onChange={guardarTexto} className="textarea"></textarea>

            <div className="contenedor-botones">

                <button className="btn-cancelar" onClick={(event) => {
                    event.preventDefault();
                    cerrarModal();
                }}>Cancelar</button>

                <button className="btn-confirmar" onClick={(event) => {
                    event.preventDefault();
                    añadirTarea(guardarInfo);
                    cerrarModal();
                }}>Confirmar</button>

            </div>
        </form>
    )

}


export { Form }