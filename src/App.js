import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import './App.css';
import Timer from './Timer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    }
  }
  componentDidMount() {
    Mousetrap.bind('space', () => {
      let running = this.state.running;
      this.setState({
        running: !running
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
  render() {
    return (
    <div className="header">
      <div className="container">
        <h1 id="electron">Electron Timer</h1>
        <div onKeyDown={this.handleKeyDown}>
        <Timer handleKeyDown={this.handleKeyDown} running={this.state.running}/>
        </div>

        <p>Press any key to start the timer</p>
        <a className="btn" href="#">Menu</a>
        <div className="row">
          <div className="column">
            <div id='timelist'>
              <h3><p id='timelisttitle'>Time List</p></h3>
              <ol>
                <li><p id='timelistelement'>5.76</p></li>
                <li><p id='timelistelement'>3.44</p></li>
                <li><p id='timelistelement'>5.67</p></li>
                <li><p id='timelistelement'>7.11</p></li>
                <li><p id='timelistelement'>6.33</p></li>
                <li><p id='timelistelement'>4.22</p></li>
              </ol>
            </div>
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
