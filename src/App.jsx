import React from 'react';
import { Titulo } from './componentes/title.jsx';
import { Buscador } from './componentes/search.jsx';
import { Lista } from './componentes/list.jsx';
import { ListItem } from './componentes/listItem.jsx';
import { Boton } from  './componentes/boton.jsx';
import { useLocalStorage } from "./hooks/useLocalStorage.jsx"

//const listaDeLaCompra = [
  //{image:"/tomate.png" ,text: "Lata de tomate", complete: false},
  //{image:"/yogur-natura.png",text: "Yogures naturales", complete: false},
  //{image:"/ensalada.png",text: "Ensalada César", complete: false},
  //{image:"/pizza.png",text: "Pizza 4 quesos", complete: false},
  //{image:"/spageti.png",text: "Spagetti con queso", complete: false},
  //{image:"/chocolate-negro.png",text: "Chocolate negro", complete: false},
  //{image:"/rollitos.png",text: "Rollitos de opio", complete: false},
  //{image:"/alhambra.png",text: "Alhambra verde", complete: false},
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

    {todos.every(producto => producto.complete) && <p style={{ textAlign: 'center', color: 'green', fontSize: '20px' }}>🎉 ¡Has comprado todo!</p>}

    <Lista>

      {loading && <p>Cargando...</p>}
      {error && <p>Hubo un problema</p>}
      {!loading && buscar.length === 0 && <p>No tienes ninguna tarea</p>}

      {buscar.map(producto =>(
        <ListItem key={producto.text} text={producto.text} image={producto.image} complete={producto.complete} 
        onComplete={() => completado(producto.text)}
        onDelete={() => borrar(producto.text)}/>
      ) )}

    </Lista>

    <Boton/>
    </>
  )
}

export default App
