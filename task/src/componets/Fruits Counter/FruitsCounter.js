import React, { Component } from 'react'

class FruitsCounter extends Component{
    state = {bannan: 0, mango: 0}
    bannan=()=>{
        this.setState(pre =>{
            return {bannan: pre.bannan+1}
        })
    }
    mango=()=>{
        this.setState((prev)=>{
            return {mango: prev.mango+1}
        })
    }
    render(){
        
        return (
            <div>
                <h1>Bob ate {this.state.bannan} bannas and {this.state.mango} manogo's</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png 'alt='mango' />
                <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png ' alt='banana' />
                <button onClick={this.bannan}>click me </button>
                <button onClick={this.mango}>click me I say</button>
            </div>
        )
    }
}

export default FruitsCounter
