import React, { Component } from "react";
import "./navigation.scss";
import NovadList from "./NovadList";

import Treds from "./Treds";
import Friends from "./Friends";
import Channels from "./Channels";
class Navigation extends Component {
  render() {
    const { profile, isReady, chats } = this.props;

    return (
      <div className="navigation">
        <div className="navigation-items">
          <NovadList />
          <Treds />
          <Channels chats={chats} />
          <Friends profile={profile} isReady={isReady} />
        </div>
      </div>
    );
  }
}

export default Navigation;
