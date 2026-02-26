import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../context/context";

function Edit() {

    const { id } = useParams()
    const navegar = useNavigate()
    const { todos, actualizarProducto} = React.useContext(TodoContext)

    const todo = todos.find(todo => todo.id === Number(id));
    const [texto, setTexto] = React.useState(todo ? todo.text : "")

    if(!todo) return <p>Producto no encontrado</p>

    const guardarTexto = (event) => {
        event.preventDefault()
        actualizarProducto(todo.id, texto)
        navegar("/")
    }

    const atras = () => {
        navegar("/")
    }

    return (
        <>
            <form onSubmit={guardarTexto}>
                <h1>Editar</h1>
                <input value={texto} onChange={(event) => setTexto(event.target.value)}/>
                <button type="submit">Guardar</button>
                <button onClick={atras}>Atras</button>
            </form>
        </>
    )
}

export { Edit}