import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// import Posts from '../posts/posts';
// import About from '../about/about';

export default props => (
    <Router history={hashHistory}>
        {/* <Route path='/posts' component={Posts} /> */}
        {/* <Route path='/about' component={About} /> */}
        {/* <Redirect from='*' to='/posts' /> */}
    </Router>
)