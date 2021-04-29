import React, { Component } from "react";
import "./profile.scss";

class Profile extends Component {
  render() {
    const { proff } = this.props;
    return <p className="proff">{proff}</p>;
  }
}

export default Profile;
