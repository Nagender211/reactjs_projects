import React, { Component } from 'react'
import Clock from './Clock'

class DebugClock extends Component{
    state={
        count: 0,
        min: 0
       
    }
    timeCOunt=()=>{
        
       
            this.setState((prevState)=>({
                count: prevState.count+1
            }))
            if(this.state.count>59){
                this.setState((prevState)=>({
                    count: 0,
                    min: prevState.min+1
                }))
            }
        
    }
    toggelBtn=()=>{
        if(!this.interval){
            console.log("timmer is started")
            this.interval=setInterval(() => {
                this.timeCOunt()
                console.log(this.state.count)
                
                
            }, 1000);
        }
        // this.setState((prevState)=>({
        //     count: prevState.count+1
        // }))
     
    }
    toggelBtnStop=()=>{
        console.log("timer is stopped ")
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
            
        }
        
    }
    restBtn=()=>{
        this.setState({count: 0})
        console.log("timer is reset")
        clearInterval(this.interval);
        this.interval = null;
    }
    
    componentDidMount(){
        
        
        this.interval=null

    }
   
    componentWillUnmount(){
        clearInterval(this.interval)

    }
    
    
    
   
    
    render(){
        const {isStart,count,min} = this.state
        
        return(
            <div>
                {min}:{count<10 ? `0${count}`: `${count}`}
                <br />

                
                
                <button onClick={this.toggelBtn}>Start</button>
                <button onClick={this.toggelBtnStop}>Stop</button>
                <button onClick={this.restBtn}>Reset</button>
                <Clock />
            </div>
        )
    }
}

export default DebugClock
