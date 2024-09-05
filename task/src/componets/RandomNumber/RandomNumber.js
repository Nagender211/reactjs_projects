import React, { Component } from 'react'

class RandomNumber extends Component{
    state ={count: 0}
    genarate=()=>{
        this.setState(()=>{
            const randomNumber = Math.floor(Math.random() * 100)
            return {count: randomNumber}
        })
    }
    render(){
        
        return(
            <div>
                <h1>Random Number</h1>
                <p>Generate the Random number in the bettwen the 0 to 100</p>
                <button onClick={this.genarate}>Genarate</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default RandomNumber
