import React, { Component } from "react";
import "./massages.scss";
import Time from "./Time";
import MessageAuthor from "./MessageAuthor";

class Message extends Component {
  render() {
    const { text, id } = this.props;

    return (
      <div className="chat-massages">
        <Time time={id} />
        <MessageAuthor text={text} />
      </div>
    );
  }
}

export default Message;
