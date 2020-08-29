import React, { Component } from "react";
import "./chat.scss";
import Message from "../messageContainer/MessageContainer";

class Chat extends Component {
  render() {
    const { messageList } = this.props;

    return (
      <div className="chat">
        <div>
          {messageList.map(({ id, text }) => (
            <Message id={id} text={text} key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Chat;
