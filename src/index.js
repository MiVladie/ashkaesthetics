import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollHandler from './util/ScrollHandler';

ReactDOM.render(
  <React.StrictMode>
    <Router basename = { process.env.PUBLIC_URL }>
      <ScrollHandler>
        <App />
      </ScrollHandler>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);