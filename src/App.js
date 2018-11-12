import React, { Component } from 'react';
import ProgressDisplay from './components/progress_display';
import TimeControl from './components/time_control';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5
    } 
    this.handleBreak = this.handleBreak.bind(this)
    this.handleSession = this.handleSession.bind(this)
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

    if (e.target.value === '+' && prevState <60){
      prevState = prevState + 1;
      this.setState({
        sessionLength: prevState
      });
    } else if (e.target.value === '-' && prevState > 1){
      prevState = prevState - 1;
      this.setState({
        sessionLength: prevState
      });
    }
    
  }

  render() {
    return (
      <div className="jumbotron">
       <ProgressDisplay />
        <TimeControl 
        sessionLength = {this.state.sessionLength}
        breakLength = {this.state.breakLength}
        handleBreak = {this.handleBreak}
        handleSession = {this.handleSession}
         />
      </div>
    );
  }
}

export default App;
