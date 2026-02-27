import { Titulo } from '../componentes/title.jsx';
import { Buscador } from '../componentes/search.jsx';
import { Lista } from '../componentes/list.jsx';
import { ListItem } from '../componentes/listItem.jsx';
import { Boton } from  '../componentes/boton.jsx';
import { Loading } from  '../componentes/loading.jsx';
import { Error } from  '../componentes/error.jsx';
import { Vacio } from  '../componentes/vacio.jsx';
import { Mensaje } from '../componentes/mensaje.jsx';
import { TodoContext} from './context.jsx';
import { ModalAñadir } from '../componentes/modal-añadir.jsx';
import { Form } from '../componentes/form.jsx';
import { Edit  } from "../componentes/edit.jsx"
import React from 'react';



function AppUi () {
    const {loading, error, buscar, completado, borrar, todos, openModal, setOpenModal, abrirEditar, todoEditando} = React.useContext(TodoContext);

    return (
    <>
        <Titulo/>
        <Buscador/>
        {todos.length > 0 && <Mensaje/>}

        {todos.length > 0 && todos.every(producto => producto.complete) && <p style={{ textAlign: 'center', color: 'rgb(10, 166, 239)', fontSize: '15px'}}>¡Completaste todas tus tareas!</p>}

    
        <Lista>

        {loading && <Loading/>}
        {error && <Error/>}
        {!loading && buscar.length === 0 && <Vacio/>}

        {buscar.map(producto =>(
            <ListItem key={producto.id} text={producto.text} complete={producto.complete} 
            onComplete={() => completado(producto.id)}
            onDelete={() => borrar(producto.id)}
            onEdit={() => abrirEditar(producto)}/>
        ) )}

        </Lista>

        <Boton/>

        {openModal && (
            <ModalAñadir>

               {todoEditando
                  ? <Edit/>
                  : <Form/>
               }

                {/* 👉 Si todoEditando EXISTE → muestra Edit
                    👉 Si todoEditando es null → muestra Form 
                */}


            </ModalAñadir>
         )}


    </>
  )
}


export {AppUi};