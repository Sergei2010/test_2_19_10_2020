import React from 'react';
<<<<<<< HEAD
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './index.css';
=======
import ReactDOM from 'react-dom';
import './index.scss';
>>>>>>> 02e7ecd... first commit
import App from './App';
import * as serviceWorker from './serviceWorker';

//создаём кастомную историю
const history = createBrowserHistory()

render(
  <React.StrictMode>
      <Router history={history}>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
