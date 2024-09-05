import React, { Component } from 'react'

class ShowHide extends Component{
    state = {firstNmae: true, lastName: true}
    toggleFirstName=()=>{
        this.setState((pre)=>{
            return {firstNmae: !pre.firstNmae}
        })
    }
    toggleLastName=()=>{
        this.setState((pre)=>{
            return {lastName: !pre.lastName}
        })
    }
    render(){
        return(
            <div>
                <h1>Show/Hide</h1>
                <button onClick={this.toggleFirstName}>Show/Hide firstNmae  </button>
                <h1>{this.state.firstNmae ? " ": "Nagender"}</h1>
                <button onClick={this.toggleLastName}>Show/Hide LastName</button>
                <h1>{this.state.lastName? " ": "Dhamakari"}</h1>
            </div>
        )
    }
}

export default ShowHide
