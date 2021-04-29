import React, { Component } from "react";
import "./profile.scss";

class ProfileAvatar extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <div className="avatar">
        <img src={avatar} alt="Logo" className="avatar" />
      </div>
    );
  }
}

export default ProfileAvatar;
