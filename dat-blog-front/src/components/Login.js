import React, { Component } from 'react';
import axios from 'axios';

import BlogDialog from './BlogDialog';

import '../styles/components/Login.css';

let url = "http://localhost:4002";

class Login extends Component {

    constructor() {
        super()
    }

    componentDidMount(){
    }

    tryLogin(event){
        event.preventDefault()
    
        axios.post(url+"/api/auth/").then(function(response){
            console.log(response.data);
        }).catch(function(err){
            console.log(err)
        })

        // this.setState({message: "asd"})

        this.BlogDialog.abacate();
    }
      
    render(){
        return (<div className="">
            <h1>Bem vindo !</h1>
            <form onSubmit={this.tryLogin}>
                <input type="text" ref={(input) => this.login = input} />
                <input type="password" ref={(input) => this.password = input} />
                <input type="submit" value="Login" />
            </form>
            <BlogDialog title="asd" message="asd" />
        </div>)
    }
}

export default Login;