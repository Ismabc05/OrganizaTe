import React from 'react';
import { Titulo } from './componentes/title.jsx';
import { Buscador } from './componentes/search.jsx';
import { Lista } from './componentes/list.jsx';
import { ListItem } from './componentes/listItem.jsx';
import { Boton } from  './componentes/boton.jsx';
import { Loading } from  './componentes/loading.jsx';
import { Error } from  './componentes/error.jsx';
import { Vacio } from  './componentes/vacio.jsx';
import { useLocalStorage } from "./hooks/useLocalStorage.jsx"

//const listaDeLaCompra = [
  //{text: "Lata de tomate", complete: false},
  //{text: "Yogures naturales", complete: false},
  //{text: "Ensalada César", complete: false},
  //{text: "Pizza 4 quesos", complete: false},
  //{text: "Spagetti con queso", complete: false},
  //{text: "Chocolate negro", complete: false},
  //{text: "Rollitos de opio", complete: false},
  //{text: "fffjfjfj", complete: false},
  //{text: "fkfkfkff verde", complete: false},
  //{text: "qqqq verde", complete: false},
  //{text: "wwww verde", complete: false},
  //{text: "eeee verde", complete: false},
  //{text: "rrrr verde", complete: false},
  //{text: "ttt verde", complete: false},
  //{text: "yyyy verde", complete: false},
  //{text: "uuuu verde", complete: false},
//]

//localStorage.setItem("LISTA_V1", JSON.stringify(listaDeLaCompra));
function App() {

  const {item: todos, actualizar: setTodos, loading, error} = useLocalStorage("LISTA_V1", [])
  const [valorInput, setValorInput] = React.useState("");

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
  // devuelve un array con todos los productos menos el clickado



  return (
    <>
    <Titulo/>
    <Buscador valorInput={valorInput} setvalorInput={setValorInput}/>

    {todos.length > 0 && todos.every(producto => producto.complete) && <p style={{ textAlign: 'center', color: 'rgb(10, 166, 239)', fontSize: '15px'}}>Completaste todas tus tareas!</p>}

    
    <Lista>

      {loading && <Loading/>}
      {error && <Error/>}
      {!loading && buscar.length === 0 && <Vacio/>}

      {buscar.map(producto =>(
        <ListItem key={producto.text} text={producto.text} complete={producto.complete} 
        onComplete={() => completado(producto.text)}
        onDelete={() => borrar(producto.text)}/>
      ) )}

    </Lista>

    <Boton/>
    </>
  )
}

export default App
