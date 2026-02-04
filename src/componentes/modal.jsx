import React from "react";
import ReactDOM from "react-dom";
import "../estilos/modal.css";
import { TodoContext } from "../context/context";

function Modal ({children}) {

    const { openModal, setOpenModal} = React.useContext(TodoContext);

    const cerrarModal = () => {
        setOpenModal(!openModal);
    }

    return ReactDOM.createPortal(

        <div className="modal" onClick={cerrarModal}>
            <div className="contenido-modal" onClick={(event) => {
                event.stopPropagation();
            }}>
                {children}
            </div>
        </div>,

        document.getElementById("modal")


    )

}


export{ Modal }