import React, { Component } from 'react'

export default class postList extends Component {
    
    constructor(props){
        super(props);

        this.state = {isReady: false, posts: []};

        this.listPosts = this.listPosts.bind(this);
    }

    listPosts(){

    }
    
    render(){
        return (
            <div>
                <h1>vem comigo</h1><br/>
                {this.state.isReady}
            </div>
        )
    }
}