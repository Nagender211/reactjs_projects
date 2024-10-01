import Cookies from 'js-cookie'
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class Login extends Component{
    state={
        username: '',
        password: '',
        isLoggin: false,

    }
    onSucces=(jwtToken)=>{
        Cookies.set('jwt-token',jwtToken,{expires: 7})
        this.setState({
            isLoggin: true
        })
        
    }
    onFormSubmit= async(e)=>{
        e.preventDefault();
        const {username,password}=this.state;
        const updateApi={username,password};
        const apiUrl='https://apis.ccbp.in/login';
        const options={
           method: 'POST',
           body: JSON.stringify(updateApi)
        }
        const response=await fetch(apiUrl,options);
        const data=await response.json();
        if(response.ok){
            console.log('Login Successful');
            // this.props.history.push('/dashboard');
            this.onSucces(data.jwt_token);
        }
        
    }
    onPasswordChange=(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    onUserNameChange=(e)=>{
        this.setState({
            username: e.target.value
        })
        
    }
    renderPassword=()=>{
        return (
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' placeholder='please enter the password' onChange={this.onPasswordChange} />
            </div>
        )
    }
    renderUserName=()=>{
        return (
            <div>
                <label htmlFor='username'>UserName:</label>
                <input type='text' id='username' value={this.state.username} placeholder='please enter the username' onChange={this.onUserNameChange} />
            </div>
            
        )
    }
    render() {
        // const {isLoggin}=this.state;
        // if(isLoggin){
        //     return <Navigate to='/' />
        // }
        const jwtToken=Cookies.get('jwt-token');
        if(jwtToken !==undefined){
            return <Navigate to='/' />
        }
      return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <div>{this.renderUserName()}</div>
                <div>{this.renderPassword()}</div>
                <button type='submit'>Login</button>

            </form>
         
        </div>
      )
    }
}

export default Login
