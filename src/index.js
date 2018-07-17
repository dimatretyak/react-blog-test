/** Bootstrap styles */
import 'bootstrap/dist/css/bootstrap.css';
import './asset/style/common.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
