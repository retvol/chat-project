import React, { Component } from "react";
import "./massages.scss";

import Photo from "../../pictures/Photo.svg";

class Message extends Component {
  state = {
    //взять время из стора - time
    data: new Date().toLocaleString(),
  };

  render() {
    const { text } = this.props;

    return (
      <div className="massages">
        <div className="photo">
          <img src={Photo} alt="Logo" className="Photo" />
        </div>
        <div className="massage">
          <div className="name">
            <p>Amilia Luna</p>
            <p>19:38 AM</p>
          </div>
          <div className="table">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
