import React, { Component } from 'react'

class Withdarw extends Component{
    state={count: 2000};
    fivetyWithDarw=()=>{
        this.setState((pre)=>{
            return {count: pre.count - 50}
        })
    }
    hunderedWithDarw=()=>{
        this.setState((pre)=>{
            return {count: pre.count - 100}
        })
    }
    twohunderedWithDarw=()=>{
        this.setState((pre)=>{
            return {count: pre.count - 200}
        })
    }
    fivehunderedWithDarw=()=>{
        this.setState((pre)=>{
            return {count: pre.count - 500}
        })
    }
    render(){
       
        return (
            <div>
                <img src='' alt='profile' />
                <p>Nagender</p>
                <h1>this is your current balence: {this.state.count}Rs</h1>
                <h4>WithDarwal</h4>
                <p>choose the WithDarwal money in rupees</p>
                <button onClick={this.fivetyWithDarw}>50</button>
                <button onClick={this.hunderedWithDarw}>100</button>
                <button onClick={this.twohunderedWithDarw}>200</button>
                <button onClick={this.fivehunderedWithDarw}>500</button>
            </div>
        )
    }
}

export default Withdarw
