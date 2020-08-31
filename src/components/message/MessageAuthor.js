import React, { Component } from "react";
import "./massages.scss";
import Photo from "../../pictures/Photo.svg";

class MessageAuthor extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="messages">
        <div className="photo">
          <img src={Photo} alt="Logo" className="Photo" />
        </div>
        <div className="message">
          <div className="name">
            <p>Amilia Luna</p>
            <p>19:38 AM</p>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageAuthor;
