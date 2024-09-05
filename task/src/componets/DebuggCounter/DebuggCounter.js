import React, { Component } from 'react'
class DebuggCounter extends Component{
    state={count: 0}
    onIncremaent=()=>{
        this.setState((prev)=>{
            return {count: prev.count +1}
        })
    }
    onDecremaent=()=>{
        this.setState((prev)=>{
            return {count: prev.count -1}
        })
    }

    render(){
        const {count }=this.state
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.onIncremaent}>Increment</button>
                <button onClick={this.onDecremaent}>Increment</button>
            </div>
        )
    }
}

export default DebuggCounter
