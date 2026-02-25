import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';
import {  createHashRouter, RouterProvider, } from "react-router-dom";

import { AppUi } from './context/appui.jsx';
import { TodoProvider } from './context/context.jsx';
import { Edit } from "./componentes/edit.jsx"
import { NotFound } from "./componentes/notfound.jsx";

const rutas = createHashRouter([
  {
    path: "/",
    element: <AppUi />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

function App() {

    return (
    <TodoProvider>
      <RouterProvider router={rutas} />
      <SpeedInsights />
    </TodoProvider>
    
  );
}

export default App
