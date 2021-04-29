import React, { Component } from "react";
import "./profile.scss";
import ShapeProfile from "../../pictures/ShapeProfile.svg";
class ProfileName extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="profile-list">
        <h6 className="profile-name">{name}</h6>
        <img src={ShapeProfile} alt="Logo" className="shapeProfile " />
      </div>
    );
  }
}

export default ProfileName;
