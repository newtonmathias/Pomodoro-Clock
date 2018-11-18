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
      timerState: 'stopped',
      sessionLabel: 'Session'
    } 
    this.handleBreak = this.handleBreak.bind(this)
    this.handleSession = this.handleSession.bind(this)
    this.reset = this.reset.bind(this)
    this.start = this.start.bind(this)
  }

  componentDidUpdate() {
    if(this.state.timer < 0 && this.state.sessionLabel === 'Session'){
      this.setState({
        timer: this.state.breakLength * 60,
        sessionLabel: 'Break'
      });
    }else if(this.state.timer < 0 && this.state.sessionLabel === 'Break'){
      this.setState({
        timer: this.state.sessionLength * 60,
        sessionLabel: 'Session'
      });
    }
  }

  handleBreak (e)  {
    let prevState = this.state.breakLength;

    if(this.state.timerState === 'stopped' && this.state.sessionLabel === 'Break'){
    if (e.target.value === '+' && prevState <60){
      prevState = prevState + 1;
      this.setState({
        breakLength: prevState,
        timer: prevState * 60
      });
    } else if (e.target.value === '-' && prevState > 1){
      prevState = prevState - 1;
      this.setState({
        breakLength: prevState,
        timer: prevState * 60
      });
    }
   }
  }

  handleSession (e)  {
    let prevState = this.state.sessionLength;
    if(this.state.timerState === 'stopped' && this.state.sessionLabel === 'Session') {
      if (e.target.value === '+' && prevState <60 ){
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
    clearInterval(this.timer)
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timer: 1500,
      timerState: 'stopped',
      sessionLabel: 'Session'
    });
  }
  start () {
   if(this.state.timerState === 'stopped' && this.state.sessionLabel === 'Session') {
    this.timer = setInterval(() => {
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
      this.setState({
        timerState: 'running',
        sessionLabel: 'Session'
      });
   } else if(this.state.timerState === 'running' && this.state.sessionLabel === 'Session'){
    clearInterval(this.timer)
    this.setState({
      timerState: 'stopped',
      sessionLabel: 'Session'
    });
   } else if(this.state.timerState === 'stopped' && this.state.sessionLabel === 'Break') {
    this.timer = setInterval(() => {
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
      this.setState({
        timerState: 'running',
        sessionLabel: 'Break'
      });
   } else if(this.state.timerState === 'running' && this.state.sessionLabel === 'Break'){
    clearInterval(this.timer)
    this.setState({
      timerState: 'stopped',
      sessionLabel: 'Break'
    });
   }
  }

  render() {
    return (
      <div className="jumbotron">
       <ProgressDisplay
       timer = {this.state.timer} 
       sessionLabel = {this.state.sessionLabel}
       />
        <TimeControl 
        sessionLength = {this.state.sessionLength}
        breakLength = {this.state.breakLength}
        handleBreak = {this.handleBreak}
        handleSession = {this.handleSession}
        reset = {this.reset}
        start = {this.start}
        timerState = {this.state.timerState}
         />
      </div>
    );
  }
}

export default App;
