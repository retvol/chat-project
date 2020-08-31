import React, { Component } from "react";
import "./navigation.scss";
import NovadButton from "../../pictures/NovadButton.svg";
import Setting from "../../pictures/Setting.svg";

class NovadList extends Component {
  render() {
    return (
      <div className="novad-list">
        <p>Novad List</p>
        <button className="novad-list-button">
          <img src={NovadButton} alt="Logo" className="nova-button" />
        </button>
        <button className="setting">
          <img src={Setting} alt="Logo" className="setting-icon" />
        </button>
      </div>
    );
  }
}

export default NovadList;
