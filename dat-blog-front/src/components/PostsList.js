import React, { Component } from 'react';
import axios from 'axios';

import '../styles/components/PostsList.css';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class PostsList extends Component {

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

      var postsListHtml = document.getElementsByClassName("makessense");
  
      for(let i = 0; i < postsListHtml.length ; i++){
        setTimeout(function(){ 
          document.getElementsByClassName("makessense")[i].classList.add("display-true");
        }, 100 * i);
      }

    }).catch(function(err){
      console.log(err);
    });
  }

  async getPostsAPI(){
    const res = await axios.get('http://localhost:4002/posts');
    return res.data;
  }

  gridItem = () => {
    let table = []

    for (let i = 0; i < this.state.posts.length; i++) {
      table.push(
        <Grid item xs={12} lg={6} key={i} className="post-item makessense display-none">
            <Card>
              <CardContent>
                <Typography type="headline" component="h2">
                  {this.state.posts[i].name}
                </Typography>
                <Typography component="p">
                {this.state.posts[i].text.substr(0,120)}...
                </Typography>
              </CardContent>
              <CardActions>
                <Button dense color="primary">
                  Share
                </Button>
                <Button dense color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            <br/>
        </Grid>)
    }
    return table
  }

  CenteredGrid = function(){
    if (this.state.posts) {
      return(
        <div className="grid-container" >
          <Grid container spacing={24}>
            {this.gridItem()}
          </Grid>
        </div>
      );
    }else{
      return(
        <p> Carregando </p>
      );
    }
  }

  render(){return this.CenteredGrid()};

}

export default PostsList;