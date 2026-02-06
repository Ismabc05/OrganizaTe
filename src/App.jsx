import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';
import { AppUi } from './context/appui.jsx';
import { TodoProvider } from './context/context.jsx';

function App() {

    return (
    <TodoProvider>
      <AppUi />
      <SpeedInsights />
    </TodoProvider>
    
  );
}

export default App
