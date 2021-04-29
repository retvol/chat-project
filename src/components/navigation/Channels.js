import React, { Component } from "react";
import "./navigation.scss";

import { Link } from "react-router-dom";
class Channels extends Component {
  render() {
    const { chats } = this.props;

    return (
      <div>
        <div className="channels-number">
          <p>Chaneles</p>
          <p>11</p>
        </div>
        <div className="channels">
          {chats.map((chat) => (
            <Link to={"/" + chat.chatId} key={chat.chatId}>
              <div className="channels-href">
                <p>{"#" + chat.chatId}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Channels;
