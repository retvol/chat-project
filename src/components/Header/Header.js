import React, { Component } from "react";
import "./header.scss";
import Star from "../../pictures/star.svg";
import Kol from "../../pictures/kol.svg";
import Icon from "../../pictures/icon.svg";
import Shape from "../../pictures/shape.svg";
import People from "../../pictures/people.svg";
class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <h4 className="channel">#general</h4>
          <img src={Star} alt="Logo" className="star" />
        </div>
        <div className="navbar-right">
          <img src={People} alt="Logo" className="people" />
          <h6 className="number">7777</h6>
          <input
            type="text"
            className="navbar-right-input"
            placeholder="search..."
          />
          <img src={Kol} alt="Logo" className="kol" />
          <img src={Shape} alt="Logo" className="shape" />
          <img src={Icon} alt="Logo" className="icon" />
        </div>
      </div>
    );
  }
}

export default Header;
