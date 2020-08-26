import React, { Component } from "react";
import "../../App.css";
import FriendsOnline from "../Picters/FriendsOnline.svg";

class FriendList extends Component {
  render() {
    const { prof } = this.props;
    return (
      <div className="Friends-list-items">
        <img src={FriendsOnline} alt="Logo" className="Friends-Online" />
        <img src={prof.image} className="Friends-Photo" />
        <p>{prof.author}</p>
      </div>
    );
  }
}

export default FriendList;
