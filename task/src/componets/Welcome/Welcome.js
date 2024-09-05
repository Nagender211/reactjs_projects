import React, { Component } from 'react'

class Welcome extends Component{
    state={subscrib: true}
    subscrib=()=>{
        this.setState((pre)=>{
            return {subscrib:!pre.subscrib}
        })
    }
    // unsubscrib=()=>{
    //     this.setState((pre)=>{
    //         return {subscrib:!pre.subscrib}
    //     })
    // }

    
    render(){
        return (
            <div>
                <h1>Welcome</h1>
                <p>Thank you happy learing </p>
                <button onClick={this.subscrib}>{this.state.subscrib ? 'subscrib' : 'subscribed'}</button>
                {/* <button onClick={this.subscrib}>subscrib</button> */}
            </div>
        )}
    }


export default Welcome
