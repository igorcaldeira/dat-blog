

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

var axios = require('axios');

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    height: 140,
    width: 100,
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {

  constructor() {
    super();
    this.state = {posts: []};
  }

  componentWillMount(){
    this.getPosts();
  }

  getPosts = function(){
    var self = this;
    this.getPostsAPI().then(function(response){
      self.setState({
        posts: response
      });
    }).catch(function(err){
      console.log(err);
    });
  }

  async getPostsAPI(){
    const res = await axios.get('http://localhost:4002/posts');
    return res.data;
  }

  createTable = () => {
    let table = []

    for (let i = 0; i < this.state.posts.length; i++) {
      table.push(<Grid item xs={12} lg={6} key={i}>
                  <Paper>
                  {this.state.posts[i].name}
                  <br/>
                  {this.state.posts[i].text.substr(0,90)}...
                  </Paper>
                </Grid>)
    }
    return table
  }

  CenteredGrid = function(){
    if (this.state.posts) {
      return(
        <div className="grid-container" >
          <Grid container spacing={24}>
            {this.createTable()}
          </Grid>
        </div>
      );
    }else{
      return(
        <p> Carregando </p>
      );
    }
  }

  render() {
    return (
      <div className="App">
          <AppBar position="static" color="default">
            <Toolbar>
              <img src={logo} className="App-logo" alt="logo" width="50px" height="50px"/>
              <Typography type="title" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>

          {this.CenteredGrid()}

        <br/><br/>
        <Button raised color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
