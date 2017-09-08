import React, { Component } from 'react';
import './App.css';

import Menu from './template/menu';
import Header from './template/header';
import Routes from './template/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
