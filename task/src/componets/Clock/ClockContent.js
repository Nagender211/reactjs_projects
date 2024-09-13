import React, { Component } from 'react'

class ClockContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    console.log('componentDidMount is called')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called')
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date(),
    })
  }

  render() {
    const { time } = this.state
    console.log('render is called')
    return (
      <div className="clock-content">
        <h1>Clock</h1>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default ClockContent
