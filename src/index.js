import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import bookStore from './redux/configureStore';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
