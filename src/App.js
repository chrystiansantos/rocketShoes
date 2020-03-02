import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  /* Irei importar o BrowserRouter aqui pois o header precisa ter acesso as rotas */
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
