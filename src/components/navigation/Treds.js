import React, { Component } from "react";
import "./navigation.scss";
import Cloud from "../../pictures/Cloud.svg";

class Treds extends Component {
  render() {
    return (
      <div className="treds">
        <button className="treds-button">
          <img src={Cloud} alt="Logo" className="cloud" />
        </button>
        <p>All treads</p>
      </div>
    );
  }
}

export default Treds;
