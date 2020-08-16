import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './style/style.scss';

import Header from './component/header/header';

import { CONTAINER } from './const/class_name';

ReactDOM.render(
  <React.StrictMode>
    <div className={CONTAINER} key={CONTAINER}>
      <Header/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
