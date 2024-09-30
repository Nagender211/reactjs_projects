import React, { Component } from 'react'
// import { json } from 'react-router-dom';
import {Navigate} from 'react-router-dom'

class Login extends Component{
    state={
        username: '',
        password: '',
        isLoggedIn: false,
        error: ''
    }
    onSuccesSubmit=()=>{
        console.log("loggin succefuly")
        this.setState({isLoggedIn: true})
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
        this.onSuccesSubmit();
    }else{
        this.setState({error: "*userName and password is not matched"})
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
        const {isLoggedIn,error}=this.state;
        if(isLoggedIn){
            return <Navigate to='/' />
        }
      return (
        <div>
            <form onSubmit={this.onSubmitForm}>
            <div>{this.renderUuserName()}</div>
            <div>{this.renderPassword()}</div>
            <button type='submit '>Login</button>
            <p style={{color: 'red', font: '2px'}}>{error}</p>

            </form>
           
        </div>
      )
    }
}
export default Login
