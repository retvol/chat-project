import React, { Component } from "react";
import "./massages.scss";
import Time from "./Time";
import MessageAuthorInfo from "./MessageAuthorInfo";
import MessageText from "./MessageText";


class Message extends Component {

  render() {
    const { text, id } = this.props;

    return (
      <div className="chat-massages">
        <Time time={id} />
        <MessageAuthorInfo />
        <MessageText text={text}/>
      </div>
    );
  }
}

export default Message;
