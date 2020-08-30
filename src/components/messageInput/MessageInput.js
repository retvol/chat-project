import React, { Component } from "react";
import "./messageInput.scss";

class MessageInput extends Component {
  render() {
    const { onKeyPress, onChange, value } = this.props;

    return (
      <div className="footer">

        <input
          type="text"
          className="footer-input"
          placeholder="Message in #General"
          onKeyPress={onKeyPress}
          onChange={onChange}
          value={value}
        />
        <button className="over"></button>
        <button className="micro"></button>
        <button className="smile"></button>
      </div>
    );
  }
}

export default MessageInput;
