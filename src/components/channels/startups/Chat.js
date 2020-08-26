import React, { Component } from "react";
import "../style/Chat.scss";

import MassagesSupport from "./MassagesSupport";
class Chat extends Component {
  render() {
    const { supTasks } = this.props;
    return (
      <div className="Chat">
        <div>
          {supTasks.map(({ id, text }) => (
            <MassagesSupport id={id} text={text} key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Chat;
