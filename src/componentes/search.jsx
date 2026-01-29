import "../estilos/search.css";
import React from "react";
import { TodoContext } from "../context/context";

function Buscador() {

    const {valorInput, setValorInput} = React.useContext(TodoContext);

    return ( <input placeholder="Busca tu tarea aqui..." value={valorInput} onChange={(event) => {
        setValorInput(event.target.value);
        
    }}></input> )
};

export { Buscador };