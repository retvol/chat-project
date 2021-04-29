import React, { Component } from "react";
import "./massages.scss";
import Time from "./Time";
import MessageAuthor from "./MessageAuthor";

class Message extends Component {
  render() {
    const { text, id, account, isReadyAccount } = this.props;

    return (
      <div className="chat-massages">
        <Time time={id} />
        <MessageAuthor
          text={text}
          account={account}
          isReadyAccount={isReadyAccount}
        />
      </div>
    );
  }
}

export default Message;
