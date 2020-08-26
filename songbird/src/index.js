import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './style/style.scss';

// import Header from './component/header/header';
// import Body from './component/body/body';

// import { CONTAINER } from './const/class_name';
import Container from './component/container/container';

ReactDOM.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
