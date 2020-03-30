import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';

const Index = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();
