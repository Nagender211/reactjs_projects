import React, { Component } from 'react'
import Clock from './Clock'

class DebugClock extends Component{
    state={
        count: 0,
        min: 25
       
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
        this.setState({count: 0,min: 25})
        console.log("timer is reset")
        clearInterval(this.interval);
        this.interval = null;
    }
    increment=()=>{
        if(this.state.min>=25){
            this.setState(prevState => ({
                min: prevState.min + 1
            }));
        }
       
    }
    decrement=()=>{
        if(this.state.min>25){
            this.setState(prevState => ({
                min: prevState.min - 1
            }));
        }
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


                <h1>{min}</h1>
                <h1>This the Clock project </h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                {/* <Clock min={min}/> */}
            </div>
        )
    }
}

export default DebugClock
