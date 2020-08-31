import React, { Component } from "react";
import "./navigation.scss";
import FriendsOnline from "../../pictures/FriendsOnline.svg";

class FriendList extends Component {
  render() {
    const { prof } = this.props;
    return (
      <div className="friends-list-items">
        <img src={FriendsOnline} alt="" className="friends-online" />
        <img src={prof.image} alt="" className="friends-photo" />
        <p>{prof.author}</p>
      </div>
    );
  }
}

export default FriendList;
