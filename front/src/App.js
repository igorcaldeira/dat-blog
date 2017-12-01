import React, { Component } from 'react';
import { addPost, getPost } from './actions'
import './App.css';

import Menu from './components/template/menu';
import Header from './components/template/header';
import Routes from './components/template/routes';

class App extends Component {
    
  state = {
    dateTimeSource: null,
    posts: []
  }

  componentDidMount () {
    const { store } = this.props
    
    store.subscribe(() => {
      this.setState(() => ({
        posts: store.getState().posts
      }))
    })

    this.getPost();
  }

  addPost = () => {
    this.props.store.dispatch(addPost({
      owner: 'igor',
      text: this.input.value
    }))

    this.input.value = ''
  }

  getPost = () => {
    this.props.store.dispatch(getPost({ }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Ok.
        </p>
        <br />
        <input type="text" ref={(input) => this.input = input} placeholder="Insira aqui" />
        <button onClick={this.addPost}>Adicionar</button>

        {this.state.posts.map(function (x, i) {
          return (<div> {x.owner} {x.text} {i} </div>);
        })}

        <br />
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
