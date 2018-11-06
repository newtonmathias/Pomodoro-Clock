import React from 'react'

const TimeControl = () => {
    return (
      <div>
       <div className="time-control row">
        <div id="session-label" className="col-md-6 text-center">
          <button id="session-increment">+</button>
          <span id="session-length">25</span>
          <button id="session-decrement">-</button>
         </div>
        <div className="col-md-6 text-center" id="break-label">
          <button id="break-increment">+</button>
          <span id="break-length">5</span>
          <button id="break-decrement">-</button>
         </div>
        </div>
        <div className="start-stop text-center">
          <button id="start_stop" className="btn btn-outline-success">Start</button>
          <button id="reset" className="btn btn-outline-danger">Reset</button>
        </div>
      </div>
      
    );
  }
  

  export default TimeControl;