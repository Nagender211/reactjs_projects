import React, { Component } from 'react'
import DititalClockContent from './DititalClockContent';

class DigitalClock extends Component{
    state={
        play: false,
        count: 25,
    }
    onPause=()=>{
        this.setState((pre)=>({
            play:!pre.play

        }))
    }
    Decrement=()=>{
        const {count}=this.state
        if(count>25){
            this.setState((pre)=>{
    
                return {
                    
                    count: pre.count-1
                }
            })
        }
       
    }
    Incretrement=()=>{
        this.setState((pre)=>{
            return {
                count: pre.count+1
            }
        })
    }
    resetClick=()=>{
        this.setState({
            play: false,
            count: 25
        })
    }
    render(){
        const { play,count } = this.state;
        return (
            <div>
                
              

                <DititalClockContent />

                

            </div>
        )
    }
}

export default DigitalClock
