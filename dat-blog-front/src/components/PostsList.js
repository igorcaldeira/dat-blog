import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

import '../styles/components/PostsList.css';

import Grid from 'material-ui/Grid';

let url = "http://localhost:4002";

class PostsList extends Component {

  constructor() {
    super()
    this.state = {posts: []}
  }

  componentWillMount(){
    this.getPosts()
  }

  getPosts = function(){
    var self = this;
    this.callPostsAPI().then(function(data){

      self.setState({
        posts: data
      })

      //creates incremental fade in animation
      for(let i = 0; i < document.getElementsByClassName("animate-incremental").length ; i++){
        setTimeout(function(){ 
          document.getElementsByClassName("animate-incremental")[i].classList.add("display-true")
        }, 100 * i)
      }

    }).catch(function(err){
      console.log(err)
    });
  }

  async callPostsAPI(){
    const res = await axios.get(url+"/api/posts")
    return res.data
  }

  gridItem = () => {
    let posts = []

    for (let i = 0; i < this.state.posts.length; i++) {
      posts.push(
        <Grid item xs={12} key={i} className="post-item animate-incremental display-none">
            <Post title={this.state.posts[i].name} description={this.state.posts[i].text.substr(0,120)+"..."}></Post><br/>
        </Grid>)
    }

    return posts
  }

  render(){
    if (this.state.posts || this.state.posts !== []) 
      return(
        <div className="grid-container" >
          <Grid container spacing={24}>
            {this.gridItem()}
          </Grid>
        </div>
      )
    else
      return( <p> Carregando... </p> )
  }
}

export default PostsList