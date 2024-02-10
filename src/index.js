import React from 'react';
import ReactDOM from 'react-dom/client';

// import components
import App from './App';

//import package components
import { BrowserRouter } from 'react-router-dom';

//import css
import "reset-css"
import "./index.css"
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

