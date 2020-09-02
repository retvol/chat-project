import React, { Component } from "react";
import "./chat.scss";
import Message from "../message/Message";

class Chat extends Component {
  render() {
    const { messageList, account, isReadyAccount } = this.props;

    return (
      <div className="chat">
        <div>
          {messageList.map(({ id, text }) => (
            <Message
              id={id}
              text={text}
              key={id}
              account={account}
              isReadyAccount={isReadyAccount}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Chat;
