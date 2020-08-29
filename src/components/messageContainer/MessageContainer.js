import React, { Component } from "react";
import "./massages.scss";
import Time from "./Time";
import Message from "./Message";

class MessageContainer extends Component {
  state = {
    //взять время из стора - time
    data: new Date().toLocaleString(),
  };

  render() {
    const { data } = this.state;
    const { text } = this.props;

    return (
      <div className="chat-massages">
        <Time data={data} />
        <Message text={text} />
      </div>
    );
  }
}

export default MessageContainer;
