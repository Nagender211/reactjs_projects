import React, { Component } from 'react';
import './DigitalClock.css'; // Import the CSS file

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
    if (!this.state.play && prevState.play) {
      clearInterval(this.timeId);
    }
  }

  startTimer = () => {
    this.timeId = setInterval(() => {
      this.setState((prevState) => ({
        timeFrame: prevState.timeFrame > 0 ? prevState.timeFrame - 1 : 0,
      }));
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  resetClick = () => {
    this.setState({
      play: false,
      timeFrame: 25 * 60,
      count: 25,
    });
  };

  onPause = () => {
    this.setState((prevState) => ({
      play: !prevState.play,
    }));
  };

  Decrement = () => {
    const { count } = this.state;
    if (count > 25) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
        timeFrame: (prevState.count - 1) * 60,
      }));
    }
  };

  Incretrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      timeFrame: (prevState.count + 1) * 60,
    }));
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  render() {
    const { timeFrame, play, count } = this.state;
    return (
      <div className="digital-clock">
        <div className="button-container">
          <button className="play-pause-btn" onClick={this.onPause}>
            {play ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="Pause"
                />
                Pause
              </div>
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="Play"
                />
                Play
              </div>
            )}
          </button>

          <button className="reset-btn" onClick={this.resetClick}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="Reset"
            />
            Reset
          </button>
        </div>

        <div className="timer-container">
          <h1 className="time-frame">{this.formatTime(timeFrame)}</h1>
        </div>

        <div className="increment-decrement">
          <button className="increment-btn" onClick={this.Decrement}>
            -
          </button>
          <p>{count}</p>
          <button className="increment-btn" onClick={this.Incretrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default DititalClockContent;
