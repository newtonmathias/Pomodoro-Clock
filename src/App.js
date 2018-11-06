import React, { Component } from 'react';
import ProgressDisplay from './components/progress_display';
import TimeControl from './components/time_control';
class App extends Component{
 
  render() {
    return (
      <div className="jumbotron">
       <ProgressDisplay />
        <TimeControl />
      </div>
    );
  }
}

export default App;
