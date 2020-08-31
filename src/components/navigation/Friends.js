import React, { Component } from "react";
import "./navigation.scss";
import FriendList from "./FriendList";
class Friends extends Component {
  render() {
    const { profile, isReady } = this.props;

    return (
      <div>
        <div className="friends">
          <p>friends</p>
          <p>82</p>
        </div>
        <div className="friends-list">
          <div>
            {!isReady
              ? "загрузка..."
              : profile.map((prof) => <FriendList prof={prof} key={prof.id} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
