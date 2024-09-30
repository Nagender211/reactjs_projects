import React, { Component } from 'react'
import Home from './Home'
import { Navigate } from 'react-router-dom'

class Submited extends Component{
    state={
        isClick: false,
    }
    Click=()=>{
        this.setState({isClick: true})
    }
    render() {
        const {isClick}=this.state;
        if(isClick){
            return <Navigate to="/" />
        }
      return (
        <div>
            <h1>succefuly</h1>
            <p>Your form is the succefuly submit</p>
            <button onClick={this.Click}>Submit Another</button>
          
        </div>
      )
    }
}

export default Submited
