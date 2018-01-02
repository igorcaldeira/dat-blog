import React, { Component } from 'react';

import '../styles/components/Header.css';
import logo from '../logo.svg';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class Header extends Component {

    render(){
        return ( 
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" width="50px" height="50px"/>
            <Typography type="title" color="inherit" className="main-title">
              Dat blog
            </Typography>
            <Button href="/">Home</Button>
            <Button href="/about">About</Button>
            <Button href="/login">Login</Button>
          </Toolbar>
        </AppBar>
    )}
}

export default Header;