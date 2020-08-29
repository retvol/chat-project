import React, { Component } from "react";
import "./massages.scss";

class Time extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="time">
        <div className="arrow"></div>
        <p>{data}</p>
        <div className="arrow"></div>
      </div>
    );
  }
}

export default Time;
