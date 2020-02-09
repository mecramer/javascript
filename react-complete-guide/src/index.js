import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// typically you render one root component (App), and in App you would nest all the sub components
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
