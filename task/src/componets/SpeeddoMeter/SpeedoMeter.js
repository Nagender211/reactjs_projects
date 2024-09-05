import React, { Component } from 'react'


class SpeedoMeter extends Component{
    state={speed: 0}
    acclarate=()=>{
        this.setState((previous) =>{
            if (previous.speed === 200) {
                return { speed: 200 };
              } else {
                return { speed: previous.speed + 10 };
              }
        })
    }
    break=()=>{
        this.setState((previous) =>{
            if (previous.speed === 0) {
                return { speed: 0 };
              } else {
                return { speed: previous.speed - 10 };
              }
        })
    }

    render(){
        return (
            <div>
                <h1>SPPEDDOMETER</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png ' alt='img'/>
                <h3>Speed is {this.state.speed}</h3>
                <p>Minmum speed is the 0kmph and max is 200kmph</p>
                <button onClick={this.acclarate}>Accelarate</button>
                <button onClick={this.break}>Breake</button>

            </div>
        )
    }

}

export default SpeedoMeter
