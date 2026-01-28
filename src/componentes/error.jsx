import "../estilos/error.css";

function Error() {
    return (
        <div className="error">

            <img src="/error-oficial.png" alt="Hubo un error"/>
            <p className="parrafo-error">Hubo un error, por favor intentalo de nuevo</p>

        </div>
    );
}

export { Error };