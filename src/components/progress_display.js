import React from 'react'

const ProgressDisplay = (props) => {
  const timeLeft=`${
    Math.floor(props.timer / 60) < 10 ? "0" : ""
  }${Math.floor(props.timer / 60)}:${
    props.timer % 60 < 10 ? "0" : ""
  }${props.timer % 60}`
    return (
      <div className="time-display text-center">
        <p>{props.sessionLabel}</p>
        <h1 id="timer-label">{timeLeft}</h1>
      </div>
    );
  }

  export default ProgressDisplay;

  