import React from 'react';
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0.00,
     }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 0.01
    }));
  }
  componentWillReceiveProps() {
    console.log(this.props.running);
    if (!this.props.running) {
      this.setState({
        seconds: 0.00
      })
      this.interval = setInterval(() => this.tick(), 10);
    } else {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div id='timer' onClick={this.toggleRunning} onKeyPress={this.toggleRunning}>
        {parseFloat(this.state.seconds).toFixed(2)}
      </div>
    );
  }
}
 export default Timer;
