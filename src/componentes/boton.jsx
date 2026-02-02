import "../estilos/boton.css";
import { TodoContext } from "../context/context";
import React from "react";

function Boton() {

    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const AbrilModal = () => {
        setOpenModal(!openModal)
    }

    return ( <button className="agregar" onClick={AbrilModal}>+</button> )
};


export { Boton };