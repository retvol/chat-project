import React, { Component } from "react";
import "../App.css";
import Star from "../Picters/star.svg";
import Kol from "../Picters/kol.svg";
import Icon from "../Picters/icon.svg";
import Shape from "../Picters/shape.svg";
import People from "../Picters/people.svg";
class Header extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-left">
          <h4 className="Channel">#general</h4>
          <img src={Star} alt="Logo" className="star" />
        </div>
        <div className="Navbar-right">
          <img src={People} alt="Logo" className="People" />
          <h6 className="Number">7777</h6>
          <input
            type="text"
            className="Navbar-right-input"
            placeholder="search..."
          />
          <img src={Kol} alt="Logo" className="Kol" />
          <img src={Shape} alt="Logo" className="Shape" />
          <img src={Icon} alt="Logo" className="Icon" />
        </div>
      </div>
    );
  }
}

export default Header;
