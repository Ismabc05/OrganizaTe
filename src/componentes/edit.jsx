import React from "react";
import { TodoContext } from "../context/context";
import "../estilos/form.css";

function Edit() {

   const {todoEditando, actualizarProducto, setOpenModal, setTodoEditando } = React.useContext(TodoContext);


   const [texto, setTexto] = React.useState("");

   React.useEffect(() => {
      if (todoEditando) {
         setTexto(todoEditando.text);
      }
   }, [todoEditando]);


   const guardar = (e) => {
      e.preventDefault();
      if (!texto.trim()) return;
      actualizarProducto(todoEditando.id, texto);
      cerrar();
   };


   const cerrar = () => {
      setOpenModal(false);
      setTodoEditando(null);
   };

   const editarTexto = (event) => {
      setTexto(event.target.value)
   }


   if (!todoEditando) return null;


   return (
      <form onSubmit={guardar} className="form">

         <label className="label"> Editar tarea:</label>

         <textarea value={texto} onChange={editarTexto} className="textarea" onKeyDown={(e) => {
            if(e.key=== "Enter" && texto.trim() !== ""){ // si el usuario no escribio nada
                    e.preventDefault();
                    guardar(e);
                    cerrar();
               }}}>
         </textarea>

         <div className="contenedor-botones">

            <button type="button" onClick={cerrar} className="btn-cancelar">
               Cancelar
            </button>

            <button type="submit" className="btn-confirmar">
               Guardar
            </button>

         </div>

      </form>
   );
}

export { Edit };