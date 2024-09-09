import React, { Component } from 'react'

class FriutCount extends Component{
    state={
        bannna: 0,
        mango: 0,
    }
    onClickBananan=()=>{
        this.setState((prev)=>{
            return {bannna: prev.bannna+1}
        })
    }
    onClickmango=()=>{
        this.setState((prev)=>{
            return {mango: prev.mango+1}
        })
    }
    render(){
        return(
            <div>
                <h1>bOTS OF mango: {this.state.mango} AND THE  {this.state.bannna}</h1>
                <button onClick={this.onClickBananan}>bannna</button>
                <button onClick={this.onClickmango}>mango</button>
            </div>
        )
    }
}

export default FriutCount
