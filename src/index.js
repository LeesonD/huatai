import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './modules/routes';

import './common/css/basic.css';
import './common/css/transition-main.css';
import "bootstrap/dist/css/bootstrap.min.css"

// import './index.css';
// import App from './App';
// import Login from './login/login';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
// registerServiceWorker();
