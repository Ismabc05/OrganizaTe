import React from "react";
import "../estilos/loading.css";

function Loading() {
    return (
        <>
        {Array(5).fill().map((_, i) => (
            <li className="lista lista-skeleton" key={i}>
                <span className="check check-skeleton"></span>
                <p className="parrafo parrafo-skeleton"></p>
                <span className="remove remove-skeleton"></span>
            </li>
        ))}
        </>
    );
}


export { Loading };