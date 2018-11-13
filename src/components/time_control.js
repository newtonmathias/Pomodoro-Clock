import React from 'react'

const TimeControl = (props) => {
    return (
      <div>
       <div className="time-control row">
        <div id="session-label" className="col-md-6 text-center">
          <button value= "+" id="session-increment" onClick = {props.handleSession}>+</button>
          <span id="session-length">{props.sessionLength}</span>
          <button value= "-" id="session-decrement" onClick = {props.handleSession}>-</button>
         </div>
        <div className="col-md-6 text-center" id="break-label">
          <button value="+" id="break-increment" onClick = {props.handleBreak} >+</button>
          <span id="break-length">{props.breakLength}</span>
          <button value= "-" id="break-decrement" onClick = {props.handleBreak}>-</button>
         </div>
        </div>
        <div className="start-stop text-center">
          <button id="start_stop" className="btn btn-outline-success" onClick={props.start}>Start</button>
          <button id="reset" className="btn btn-outline-danger" onClick = {props.reset}>Reset</button>
        </div>
      </div>
      
    );
  }
  

  export default TimeControl;