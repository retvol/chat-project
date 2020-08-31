import React, { Component } from "react";
import "./massages.scss";

class Time extends Component {
  render() {
    const { time } = this.props;

    return (
      <div className="time">
        <div className="line"></div>
        <p>{time}</p>
        <div className="line"></div>
      </div>
    );
  }
}

export default Time;
