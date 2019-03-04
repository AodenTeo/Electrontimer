import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import './App.css';
import Timer from './Timer/Timer.js';
import TimeList from './TimeList/TimeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      TimeList: [5.55, 4.22, 4.73, 4.72, 6.27]
    }
    this.addTime = this.addTime.bind(this);
  }
  componentDidMount() {
    Mousetrap.bind('space', () => {
      let running = this.state.running;
      this.setState({
        running: !running,
      })
      console.log("On KeyDown was called");
      console.log(this.state.running);
    })
  }
  componentWillUnmount() {
    Mousetrap.bind('space', function() {
 
      console.log("On KeyDown was called");
    })
  }
  addTime(time) {
    let newTimeList = this.state.TimeList.concat(time)
    this.setState({
      TimeList: newTimeList
    })
  }
  render() {
    return (
          <div className="header">
      <div className="container">
        <h1 id="electron">Electron Timer</h1>
        <div onKeyDown={this.handleKeyDown}>
        <Timer running={this.state.running} addTime = {this.addTime}/>


        <p>Press any key to start the timer</p>
        <a className="btn" href="#">Menu</a>
    </div>

        <div className="row">
          <div className="column">
            <TimeList TimeList={this.state.TimeList}/>
          </div>
           <div className="column">
            <div id='statistics'>
              <h3 >Statistics</h3>
              <p id='statelement'>Average of 5: {}</p>
              <p id='statelement'>Average of 12: {}</p>
              
              <p id='statelement'>Mean of 3: {}</p>
              <p id='statelement'>Best Single: {}</p>
              <p id='statelement'>Best Average: {}</p>
            </div>

          </div>
        </div>
        
      </div>
    </div>



    );
  }
}

export default App;
