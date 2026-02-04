import "../estilos/vacio.css";

function Vacio() {
    return (
        <div className="tareas-vacias">

            <img src="/imagen-vacio.png" alt="No hay tareas"/>
            <p className="parrafo-vacio">No tienes ninguna tarea, crea tu primera tarea!</p>

        </div>
    );
}

export { Vacio };