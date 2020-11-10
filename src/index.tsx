import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import * as serviceWorker from './serviceWorker';
import qiankunStart from 'config/qiankunStart';
import 'assets/style/index.less';

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);

sessionStorage.token = 'token';

qiankunStart();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
