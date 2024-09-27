import React, { Component } from 'react'
import Clock from './Clock'

class DebugClock extends Component{
    render(){
        return(
            <div>
                <h1>DebugClock</h1>
                <Clock />
            </div>
        )
    }
}

export default DebugClock
