import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
// import history from './services/history';

import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />

        <BrowserRouter>
          <Routes />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
