import React, { Component } from "react";
import "./profile.scss";

import ProfileButtonArrow from "../../pictures//ProfileButtonArrow.svg";

class ProfileArrow extends Component {
  render() {
    return (
      <div className="profile-arrow">
        <button className="profile-arrow-button">
          <img
            src={ProfileButtonArrow}
            alt="Logo"
            className="profile-arrow-button-logo"
          />
        </button>
      </div>
    );
  }
}

export default ProfileArrow;
