import React, { Component } from 'react'

class LightDarkMode extends Component{
    state ={mode: true}
    changemode=()=>{
        this.setState((pre)=>{
            return {mode:!pre.mode}
        })
    }
    lightMode =()=>
    {
        return <button style={{backgroundColor: 'white', color: 'black', width: "100vw", height: "100vh"}}>Dark Mode</button>
    }
    
    darkMode =()=>{
        return <button style={{backgroundColor: 'black', color: 'white', width: "100vw", height: "100vh"}}>Light Mode</button>
    }
    render(){
        return(
            <div>
                <h1>Click to change the mode</h1>
                <button onClick={this.changemode}>{this.state.mode? this.lightMode() : this.darkMode()}</button>
                
            </div>
        )
    }
}

export default LightDarkMode
