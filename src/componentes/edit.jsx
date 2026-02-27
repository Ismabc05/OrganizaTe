import React from "react";
import { TodoContext } from "../context/context";

function Edit() {

   const {
      todoEditando,
      actualizarProducto,
      setOpenModal,
      setTodoEditando
   } = React.useContext(TodoContext);


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


   if (!todoEditando) return null;


   return (
      <form onSubmit={guardar} className="edit-form">

         <h2 className="edit-title">Editar tarea</h2>

         <input
            className="edit-input"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Editar tarea..."
            autoFocus
         />

         <div className="edit-buttons">

            <button type="submit" className="btn-save">
               Guardar
            </button>

            <button
               type="button"
               onClick={cerrar}
               className="btn-cancel"
            >
               Cancelar
            </button>

         </div>

      </form>
   );
}

export { Edit };