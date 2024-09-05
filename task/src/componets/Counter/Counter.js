import React, { Component } from 'react'

class Counter extends Component{
    state={count: 0};
    inCreatement=()=>{
        this.setState(previous =>{
           
            return {count: previous.count+1}
        })
    }
    render(){
       return (
        <div>
            <h1>The button has clicked {this.state.count}</h1>
            
            <p>Ccleck the button the increase the count</p>
            <button onClick={this.inCreatement}>Click me</button>
            
        </div>
       )
        
    }
}

export default Counter
