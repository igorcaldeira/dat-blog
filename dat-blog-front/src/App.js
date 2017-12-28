import React, { Component } from 'react';

import logo from './logo.svg';
import './styles/App.css';
import PostsList from './components/PostsList';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" width="50px" height="50px"/>
            <Typography type="title" color="inherit">
              Posts
            </Typography>
          </Toolbar>
        </AppBar>
        <PostsList></PostsList>
        <br/><br/><br/>
      </div>
    );
  }
}

export default App;
