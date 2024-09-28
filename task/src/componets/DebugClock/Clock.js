import React, { Component } from 'react'

class Clock extends Component{
    state={
        count: 25,

    }
    
    increment=()=>{
        if(this.state.count>=25){
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }
       
    }
    decrement=()=>{
        if(this.state.count>25){
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        }
    }
    render() {
        const {count}=this.state
      return (
        <div>
            <h1>{count}</h1>
          <h1>This the Clock project </h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>


        </div>
      )
    }
}

export default Clock
