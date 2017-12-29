import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory'

import App from './App';
import Login from './components/Login';

const routeHistory = createHistory()

ReactDOM.render((
    
    <Router history={routeHistory}>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={App}/>
            {/* <Route path="/login" component={Login} /> */}
        </Switch>
    </Router>
    
),document.getElementById('root'));
registerServiceWorker();
