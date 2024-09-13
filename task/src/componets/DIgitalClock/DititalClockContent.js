import React, { Component } from 'react';

class DititalClockContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25, 
      timeFrame: 25 * 60, 
      play: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.play && !prevState.play) {
      this.startTimer();
    }

    // Stop the timer when 'play' is false and was previously true
    if (!this.state.play && prevState.play) {
      clearInterval(this.timerId);
    }

    // If the count changes, update the timeFrame to reflect the new count
    if (this.state.count !== prevState.count) {
      this.setState({
        timeFrame: this.state.count * 60, // Update timeFrame in seconds based on count
      });
    }
  }

  componentWillUnmount() {
    // Clear interval when the component is unmounted
    clearInterval(this.timerId);
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.timeFrame > 0) {
          return {
            timeFrame: prevState.timeFrame - 1, 
          };
        } else {
          clearInterval(this.timerId); 
          return { play: false };
        }
      });
    }, 1000); 
  };

  formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle decrement
  Decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 1 ? prevState.count - 1 : 1, // Ensure the count doesn't go below 1 minute
    }));
  };

  // Handle increment
  Increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Handle reset
  resetClick = () => {
    clearInterval(this.timerId);
    this.setState({
      play: false,
      count: 25, 
      timeFrame: 25 * 60, 
    });
  };


  onPause = () => {
    this.setState((prevState) => ({
      play: !prevState.play, // Toggle play state
    }));
  };

  render() {
    const { play, count, timeFrame } = this.state;

    return (
      <div>
      
        <button onClick={this.onPause}>
          {play ? (
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" alt="pause" />
              Pause
            </div>
          ) : (
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" alt="play" />
              Play
            </div>
          )}
        </button>

    
        <button onClick={this.resetClick}>
          <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset" />
          Reset
        </button>


        <div>
          <button onClick={this.Decrement}>-</button>
          <p>{count} Minutes</p>
          <button onClick={this.Increment}>+</button>
        </div>

        
        <h1>{this.formatTime(timeFrame)}</h1>
      </div>
    );
  }
}

export default DititalClockContent;
