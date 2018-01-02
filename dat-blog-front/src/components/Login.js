import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import BlogDialog from './BlogDialog';

import '../styles/components/Login.css';

import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import AccountCircle from 'material-ui-icons/AccountCircle';

let url = "http://localhost:4002";

class Login extends Component {

    constructor(){
        super()
        this.state = {username: "", password: ""}
        this.tryLogin = this.tryLogin.bind(this);
    }

    componentDidMount(){
    }

    tryLogin(event){
        event.preventDefault()

        var self = this;
        var params = {
            name: this.state.username,
            password: this.state.password
        }

        axios.post(url+"/api/auth/", params).then(function(response){
            if(response.data.success){
                console.log("redirect");
            }else{
                self.refs.dialog.open("Hey!", response.data.message);
            }
        }).catch(function(err){
            self.refs.dialog.open("Ooops", "Failed to make connection with the server. Try again later!");
        })
    }

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };
      
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    
    render(){
        return (
        <div className="">
            <Header></Header><br/>
            <Card className="login-container">
                <CardContent className="card-content">
                    <AccountCircle className="icon-account" />
                    <form onSubmit={this.tryLogin}>
                        <FormControl className="input-line">
                            <InputLabel htmlFor="user-text">Username</InputLabel>
                            <Input id="user-text" fullWidth={true} ref={(input) => this.login = input}
                                onChange={this.handleChange('username')} />
                        </FormControl>
                        <FormControl className="input-line">
                            <InputLabel htmlFor="user-password">Password</InputLabel>
                            <Input
                                id="user-password"
                                ref={(input) => this.password = input}
                                type={this.state.showPassword ? 'text' : 'password'} 
                                onChange={this.handleChange('password')}
                                fullWidth={true}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        onClick={this.handleClickShowPasssword}
                                        onMouseDown={this.handleMouseDownPassword}
                                        >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }/>
                        </FormControl>
                        <Button raised color="primary" className="main-button" type="submit">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <BlogDialog ref="dialog"/>
        </div>
        )
    }
}

export default Login;