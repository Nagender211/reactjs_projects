import React, { Component } from 'react'
// import { json } from 'react-router-dom';
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'


class Login extends Component{
    state={
        username: '',
        password: '',
        isLoggedIn: false,
        showError: false,
        error: '',
        isLoding: true,
    }
    onSuccesSubmit=(jwtToken)=>{
        Cookies.set('jwt-token', jwtToken, {expires: 7})
        console.log("loggin succefuly")
        this.setState({isLoggedIn: true})
    }
    onFaillur=(errorMsg)=>{
        console.log("error in login", errorMsg)
        this.setState({
            showError: true,
            error: errorMsg
        })
        // this.setState({error: errorMsg})

    }
    onSubmitForm=async(e)=>{
        e.preventDefault();
       const {username,password}=this.state;
       const updateUser={username,password};
       const url='https://apis.ccbp.in/login';
       const options = {
        method: 'POST',
       
        body: JSON.stringify(updateUser)
    };
    const response = await fetch(url,options);
    const data = await response.json();
    if(response.ok === true){
        this.onSuccesSubmit(data.jwt_token);
    }else{
        // this.setState({error: "*userName and password is not matched"})
        this.onFaillur(data.error_msg);
        // console.log("error page is valid")
    }
    }
    userNameChange=(e)=>{
        this.setState({username: e.target.value})
    }
    passwordChange=(e)=>{
        this.setState({password: e.target.value})
    }
    renderPassword=()=>{
        const {password} = this.state
        return (
            <div>
                 <label htmlFor="password">Password:</label>
                <input type='password' id='password' value={password} onChange={this.passwordChange} />
            </div>
        )
    }
    renderUuserName=()=>{
        const {username} = this.state;
        
        return (
            <div>
                <label htmlFor='username'>User Name:</label>
                <input type='text' id='username' value={username} onChange={this.userNameChange} />
            </div>
        )
    }
    render() {
        const {isLoggedIn,error,showError}=this.state;
        if(isLoggedIn){
            return <Navigate to='/' />
        }
        const jwtToken=Cookies.get('jwt-token');
        if(jwtToken !== undefined){
            return <Navigate to='/' />
        }
      return (
        <div>
            <form onSubmit={this.onSubmitForm}>
            <div>{this.renderUuserName()}</div>
            <div>{this.renderPassword()}</div>
            <button type='submit '>Login</button>
            {showError && <p style={{color: 'red', font: '2px'}}>*{error}</p>}

            </form>
           
        </div>
      )
    }
}
export default Login
