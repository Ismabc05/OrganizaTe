import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({children}) {
    const {item: todos, actualizar: setTodos, loading, error} = useLocalStorage("LISTA_V1", [])
    const [valorInput, setValorInput] = React.useState("");

    const productosCompletados = todos.filter(producto => !!producto.complete).length
    const totalProductos = todos.length

    const buscar = todos.filter((producto) => {
        return producto.text.toLowerCase().includes(valorInput.toLocaleLowerCase())
     })

    const completado = (text) => {
    const nuevaLista = [... todos]
    const nuevoCompletado = nuevaLista.findIndex((producto) => producto.text === text);
        nuevaLista[nuevoCompletado].complete = true;
        setTodos(nuevaLista);
    }

    const borrar = (text) => {
    const nuevaLista = todos.filter(producto => producto.text !== text);
    setTodos(nuevaLista);
    }

    return(
        <TodoContext.Provider value={{loading, error, setValorInput, buscar, borrar, completado, todos, totalProductos, productosCompletados}}>
            {children}
        </TodoContext.Provider>
    )

}



export { TodoContext, TodoProvider}