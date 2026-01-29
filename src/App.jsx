import React from 'react';
import { AppUi } from './context/appui.jsx';
import { TodoProvider } from './context/context.jsx';

function App() {

    return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
    
  );
}

export default App
