import React, { Component } from "react";
import "./profile.scss";

import ButtonArrow from "../../pictures/ButtonArrow.svg";

class ProfileButton extends Component {
  render() {
    return (
      <div className="profile-button">
        <button className="massage-button">Message</button>
        <button className="button-arrow">
          <img src={ButtonArrow} alt="Logo" className="arrow" />
        </button>
      </div>
    );
  }
}

export default ProfileButton;
