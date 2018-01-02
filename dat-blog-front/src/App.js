import React, { Component } from 'react';

import './styles/App.css';
import Header from './components/Header';
import PostsList from './components/PostsList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <PostsList></PostsList>
        <br/><br/><br/>
      </div>
    );
  }
}

export default App;
