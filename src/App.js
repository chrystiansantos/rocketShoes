import React from 'react';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import GlobalStyle from './styles/global';
import Routes from './routes';

import './config/ReactotronConfig';

import store from './store';

import history from './services/history';

function App() {
  /* Irei importar o BrowserRouter aqui pois assim o header ira consegui acessar
  as rotas */
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
