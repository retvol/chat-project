import React, { Component } from "react";
import "./navigation.scss";
import NovadButton from "../../pictures/NovadButton.svg";
import Setting from "../../pictures/Setting.svg";
import Cloud from "../../pictures/Cloud.svg";

import FriendList from "./FriendList";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    const { profile, isReady, chats } = this.props;

    return (
      <div className="scroll">
        <div className="scroll-list">
          <div className="novad-list">
            <p>Novad List</p>
            <button className="novad-list-button">
              <img src={NovadButton} alt="Logo" className="nova-button" />
            </button>
            <button className="setting">
              <img src={Setting} alt="Logo" className="setting-icon" />
            </button>
          </div>
          <div className="treds">
            <button className="treds-button">
              <img src={Cloud} alt="Logo" className="cloud" />
            </button>
            <p>All treads</p>
          </div>
          <div className="chaneles-number">
            <p>Chaneles</p>
            <p>11</p>
          </div>
          <div className="channels">
            {chats.map(chat => (
              <Link to={"/" + chat.chatId}>
                <div className="channels-href">
                  <p>{"#" + chat.chatId}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="friends">
            <p>friends</p>
            <p>82</p>
          </div>
          <div className="friends-list">
            <div>
              {!isReady
                ? "загрузка..."
                : profile.map((prof) => <FriendList prof={prof} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
