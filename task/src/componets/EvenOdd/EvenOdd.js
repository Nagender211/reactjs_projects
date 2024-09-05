import React, { Component } from 'react'

class EvenOdd extends Component{
    state={count: 0}
    OnRandomClick=()=>{
        this.setState(()=>{
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            return {count: randomNumber}
            
  
        })
    }
    render() {
        const {count } = this.state;

        let result;
        if (count % 2 === 0) {
            result = <h2>Even Number</h2>
        } else {
            result = <h2>Odd Number</h2>
        }
      return (
        
        <div>
          <h1>count is:  {count} {result}</h1>
          <p>This the evem odd the checking app between the 0 to 100</p>
          <button onClick={this.OnRandomClick}>Increment</button>
          
        </div>

      )
    }
}
export default EvenOdd
