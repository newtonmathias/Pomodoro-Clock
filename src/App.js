import React, { Component } from 'react';
import ProgressDisplay from './components/progress_display';
import TimeControl from './components/time_control';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timer: 1500,
      timerState: 'stopped'
    } 
    this.handleBreak = this.handleBreak.bind(this)
    this.handleSession = this.handleSession.bind(this)
    this.reset = this.reset.bind(this)
    this.start = this.start.bind(this)
  }

  handleBreak (e)  {
    let prevState = this.state.breakLength;

    if (e.target.value === '+' && prevState <60){
      prevState = prevState + 1;
      this.setState({
        breakLength: prevState
      });
    } else if (e.target.value === '-' && prevState > 1){
      prevState = prevState - 1;
      this.setState({
        breakLength: prevState
      });
    }
  }

  handleSession (e)  {
    let prevState = this.state.sessionLength;
    if(this.state.timerState === 'stopped') {
      if (e.target.value === '+' && prevState <60){
        prevState = prevState + 1;
        this.setState({
          sessionLength: prevState,
          timer: prevState * 60
        });
      } else if (e.target.value === '-' && prevState > 1){
        prevState = prevState - 1;
        this.setState({
          sessionLength: prevState,
          timer: prevState * 60
        });
      }
    }
    
  }

  reset () {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timer: 1500
    });
  }
  start () {
   if(this.state.timerState === 'stopped') {
    setInterval(() => {
      let prevState = this.state.timer;
        this.setState({
          timer: --prevState,
          timerState: 'running'
        });
      }, 1000);
   }
  }

  render() {
    return (
      <div className="jumbotron">
       <ProgressDisplay
       timer = {this.state.timer} 
       />
        <TimeControl 
        sessionLength = {this.state.sessionLength}
        breakLength = {this.state.breakLength}
        handleBreak = {this.handleBreak}
        handleSession = {this.handleSession}
        reset = {this.reset}
        start = {this.start}
         />
      </div>
    );
  }
}

export default App;
