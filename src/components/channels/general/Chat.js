import React, { Component } from "react";
import "../style/Chat.scss";

import Massages from "./Massages";
class Chat extends Component {
  render() {
    const { task } = this.props;
    return (
      <div className="Chat">
        <div>
          {task.map(({ id, text }) => (
            <Massages id={id} text={text} key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Chat;
