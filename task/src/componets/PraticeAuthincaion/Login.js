import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component{
    state={
        username: '',
        password: '',
        onSsucces: false,
        onFauiler: false,
        error: '',
        fill: {},
    }

    validate=()=>{
        const {username,password}=this.state;
        const requrederror={};
        if(username.trim()===''){
            requrederror.username='Username is required';
        }
        if(password.trim()===''){
            requrederror.password='Password is required';
        }
        return requrederror;
    }
    onFauiler=(errorMsg)=>{
        this.setState({
            error: errorMsg,
            onSsucces: false,
            onFauiler: true
        })
    }
    onSuccesLlogin=(jwtToken)=>{
        Cookies.set('jwt-token',jwtToken,{expires: 7})
        this.setState({
            onSsucces: true
        })
        

    }

    
    
    onFormSubmit= async(e)=>{
        e.preventDefault()
        const {username,password}=this.state;
        const url='https://apis.ccbp.in/login';
        const updateUser={username,password};
        const options={
            method: 'POST',
            body: JSON.stringify(updateUser)
        }
        const response=await fetch(url,options);
        const data=await response.json();
        const requiredError=this.validate();
        if(Object.keys(requiredError).length>0){
            this.setState({
                fill: requiredError
            })
            return;
        }
        if(response.ok===true){
            this.onSuccesLlogin(data.jwt_token);
        }else{
            this.onFauiler(data.error_msg);
        }
        // this.clearLoginDeatils();
    }
    passwordChange=(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    userNameChange=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    renderPassword=()=>{
        const {fill}=this.state;
        
        return (
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' placeholder='please enter the password' onChange={this.passwordChange} />
                {fill.password && <p>{fill.password}</p>}
               
            </div>
        )
    }
    renderUserName=()=>{
        const {fill}=this.state;
        return (
            <div>
                <label htmlFor='username'>label</label>
                <input type='text' id='username' placeholder='please enter the user Name' onChange={this.userNameChange} />
                {fill.username && <p>{fill.username}</p> }
            </div>
        )
    }

    render() {
        const {onSsucces,onFauiler,error}=this.state;
        if(onSsucces){
            return <Navigate to='/' />
        }
        const jwtToken=Cookies.get('jwt-token');
        if(jwtToken !== undefined){
            return <Navigate to='/' />;
        }
      return (
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div>{this.renderUserName()}</div>
            <div>{this.renderPassword()}</div>
            <button type='submit'>Login</button>
            {onFauiler && <div>*{error}</div>}
            </form>
          
        </div>
      )
    }
}

export default Login
