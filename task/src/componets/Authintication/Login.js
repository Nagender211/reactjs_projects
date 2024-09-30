import React, { Component } from 'react'
// import { json } from 'react-router-dom';

class Login extends Component{
    state={
        username: '',
        password: ''
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
    console.log(data);
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
                {/* <input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} /> */}
                <input type='password' id='password' value={password} onChange={this.passwordChange} />
            </div>
        )
    }
    renderUuserName=()=>{
        const {username} = this.state
        return (
            <div>
                <label htmlFor='username'>User Name:</label>
                {/* <input type="text" value={this.state.userName} onChange={(e)=>this.setState({userName:e.target.value})} /> */}
                <input type='text' id='username' value={username} onChange={this.userNameChange} />
            </div>
        )
    }
    render() {
      return (
        <div>
            <form onSubmit={this.onSubmitForm}>
            <div>{this.renderUuserName()}</div>
            <div>{this.renderPassword()}</div>
            <button type='submit '>Login</button>

            </form>
           
        </div>
      )
    }
}
export default Login
