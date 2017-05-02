import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';

const StoreInstance = store();

ReactDOM.render(<Provider store={ StoreInstance }>
    <App />
  </Provider>,
  document.getElementById('root')
);
