import React, { Component } from 'react';

import '../styles/components/Login.css';

class Login extends Component {

    constructor() {
        super()
        this.state = {message: ""}
    }

    componentDidMount(){
    }

    tryLogin(event){
        event.preventDefault()
        // this.setState({
        //     message: "Erro ao realizar o login"
        // })
        alert('okay')
    }

    render(){
        return (<div className="">
            <h1>Bem vindo !</h1>
            <form onSubmit={this.tryLogin}>
                <input type="text" ref={(input) => this.login = input} />
                <input type="password" ref={(input) => this.password = input} />
                <input type="submit" value="Login" />
            </form>
            {(this.state.message && this.state.message != '') ? this.state.message : ''}
        </div>)
    }
}

export default Login;