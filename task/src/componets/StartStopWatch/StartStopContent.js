import React, { Component } from 'react';

class StartStopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      timeFrame: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.play && !prevState.play) {
      this.setTimer();
    }
    if (!this.state.play && prevState.play) {
      clearInterval(this.timeId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  setTimer = () => {
    this.timeId = setInterval(() => {
      this.setState((prevState) => ({
        timeFrame: prevState.timeFrame + 1, // Always increment timeFrame by 1
      }));
    }, 1000); // Set to 1000ms for a 1-second interval
  };

  resetAll = () => {
    clearInterval(this.timeId); // Ensure timer is cleared
    this.setState({
      play: false,
      timeFrame: 0,
    });
  };

  togglePlay = () => {
    this.setState((prevState) => ({
      play: !prevState.play,
    }));
  };

  format = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    const { timeFrame } = this.state;
    return (
      <div>
        <button onClick={this.togglePlay}>
          Start
        </button>
        <button onClick={this.togglePlay}>Stop</button>
        <button onClick={this.resetAll}>Reset</button>
        <h1 className="time-frame">{this.format(timeFrame)}</h1>
      </div>
    );
  }
}

export default StartStopContent;
