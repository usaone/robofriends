import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Chello from './Chello';
import Trailer from './Trailer';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<Hello greeting={'Hello React Ninja'}/>, document.getElementById('root'));
//ReactDOM.render(<Trailer />, document.getElementById('root'));
//ReactDOM.render(<Chello greeting={'Hello React Ninja'}/>, document.getElementById('root'));
registerServiceWorker();
