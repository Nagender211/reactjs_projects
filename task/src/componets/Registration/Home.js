import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class Home extends Component{
    state={
        firstname: '',
        lastname: '',
        isSubmit: false,
        error: {},

    }
    clearSate=()=>{
        this.setState({
            firstname: '',
            lastname: '',
            isSubmit: false,
            error: {},
            
        })
    }
    succese=()=>{
        this.setState({
            isSubmit: true,
        })
    }
    validate=()=>{
        const {firstname,lastname}=this.state;
        const error={};
        if(firstname.trim()===''){
            error.firstname='Firstname is required'
        }
        if(lastname.trim()===''){
            error.lastname='Lastname is required'
        }
        return error;
    }
    submitForm=(e)=>{
        e.preventDefault()
        const {firstname,lastname}=this.state;
        const error=this.validate();
        if(Object.keys(error).length>0){
            this.setState({
                error: error
            })
            return;
        }
        // const updateUse={firstname,lastname};
        this.setState({
            firstname: firstname,
            lastname: lastname,
            
        })
        console.log(firstname,lastname)
        this.clearSate();
        this.succese();
        
        
        
    }
    passwordChange=(e)=>{
        this.setState({
            lastname: e.target.value
        })
    }
    firstnameChange=(e)=>{
        this.setState({
            firstname: e.target.value
        })
    }
    password=()=>{
        const {error}=this.state
        return(
            <div>
                <label>LastName:</label>
                <input type='text' id='LastName' placeholder='Lastname' value={this.state.lastname} onChange={this.passwordChange} />
                {error.lastname && <p>{error.lastname}</p>}
            </div>
        )
    }
    firstname=()=>{
        const {error}=this.state;
        return (
            <div>
                <label>firstname:</label>
                <input type='text' id='firstname' placeholder='firstname' value={this.state.firstname} onChange={this.firstnameChange} />
                {error.firstname && <p>{error.firstname}</p>}
            </div>
        )
    }

    render() {
        const {isSubmit,firstname,lastname}=this.state;
        if(isSubmit){
            return <Navigate to='/submit' />

        }
      return (
        <div>
            <h1>Registration</h1>
            <p>Welcome to the registration page.</p>
            <form onSubmit={this.submitForm}>
            <div>{this.firstname()}</div>
            {/* {firstname.length === 0 && <p>Required to fill</p>} */}
            <div>{this.password()}</div>
            {/* {lastname.length === 0 && <p>Required to fill</p>} */}
            <button type='sunmit'>Submit</button>
  
        </form>
        
  
      </div>
      )
    }
}
export default Home
