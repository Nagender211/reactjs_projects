import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
class Login extends Component{
  state={
    username: '',
    password: '',
    isLoggIn: false,
    error: '',
    showError: false
  }
  // onSuccessSubmit=()=>{
  //   console.log('Login Successful')
  // }
  onSuccesForm=(jwtToken)=>{
    Cookies.set('jwt-token',jwtToken, {expires: 7})
    console.log('looged in succefuly')
    this.setState({isLoggIn: true})

  }
  onFailur=(errorMsg)=>{
    this.setState({
      error: errorMsg,
      showError: true,
      isLoggIn: false
    })
  }
  onSubmitForm=async(e)=>{
    e.preventDefault();
    const {username,password}=this.state
    const updateUser={username,password};
    console.log(updateUser);
    const url='https://apis.ccbp.in/login';
    const options={
      method: 'POST',
     
      
      body: JSON.stringify(updateUser)
    }
    const response=await fetch(url,options);
    const data=await response.json();
    console.log(response)
    if(response.ok===true){
      this.onSuccesForm(data.jwt_token)
    }else{
      this.onFailur(data.error_msg)
    }
  }
  userName=(e)=>{
    this.setState({username: e.target.value})
  }
  password=(e)=>{
    this.setState({password: e.target.value})
  }
  renderUserName=()=>{
    const {username}=this.state
    return (
      <div>
         <label htmlFor='userName'>userName</label>
         <input type='text' id='userName' onChange={this.userName} value={username} placeholder='please enter the User Name'/>

      </div>
    )
  }
  renderPassword=()=>{
    const {password}=this.state
    return(
      <div>
         <label htmlFor='password'>Password</label>
         <input type='password' id='password' onChange={this.password} value={password} placeholder='please enter the Password'/>
           

      </div>
    )
  }
  render() {
    const {isLoggIn, error, showError}=this.state
    // if(isLoggIn){
    //   return <Navigate to='/' />
    // }
    const jwtToken=Cookies.get('jwt-token')
    if(jwtToken !== undefined){
      return <Navigate to='/' />
    }
    
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmitForm}>
           <div>{this.renderUserName()}</div>
           <div>{this.renderPassword()}</div>
            <button type='submit'>Login</button>
            {showError && <p style={{color: 'red'}}>*{error}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
