import React from 'react';
import {  createHashRouter, RouterProvider, } from "react-router-dom";

import { AppUi } from './context/appui.jsx';
import { TodoProvider } from './context/context.jsx';
import { Edit } from "./componentes/edit.jsx"
import { NotFound } from "./componentes/notfound.jsx";

const rutas = createHashRouter([
  {
    path: "/",
    element: (
      <TodoProvider>
        <AppUi/>
      </TodoProvider>
    ),
  },

  {
    path: "/edit/:id",
    element: (
    <TodoProvider>
      <Edit/>
    </TodoProvider>
    ),
  },
  
  {
    path: "*",
    element: <NotFound/>,
  }
]);

function App() {

    return ( <RouterProvider router={rutas} /> );
}

export default App
