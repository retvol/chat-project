import React, { Component } from "react";
import "./profile.scss";

class ProfileInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="profil-info">
        <p>username</p>
        <h6>@{info.username}</h6>
        <p>Email</p>
        <h6>{info.email}</h6>
        <p>Skype</p>
        <h6>{info.skype}</h6>
        <p>Timezone</p>
        <h6>2:21 PM Local time</h6>
      </div>
    );
  }
}

export default ProfileInfo;
