import React, { Component } from 'react'
import ClockContent from './ClockContent'
import './Clock.css' // Make sure to import the CSS

class Clock extends Component {
  state = {
    showClock: false,
  }

  onClickClock = () => {
    this.setState((prev) => ({
      showClock: !prev.showClock,
    }))
  }

  render() {
    const { showClock } = this.state
    return (
      <div className="clock-app">
        <button onClick={this.onClickClock}>
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <ClockContent />}
      </div>
    )
  }
}

export default Clock
