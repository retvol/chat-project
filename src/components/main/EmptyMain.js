import React, { Component } from "react";
import "./main.scss";
import Header from "../header/Header";
import MessageInput from "../messageInput/MessageInput";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="empty-main">
          <h1>Выберите чат</h1>
        </div>

        <MessageInput />
      </div>
    );
  }
}

export default MainContainer;
