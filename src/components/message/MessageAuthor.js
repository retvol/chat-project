import React, { Component, Fragment } from "react";
import "./massages.scss";

class MessageAuthor extends Component {
  render() {
    const { text, account, isReadyAccount } = this.props;

    return (
      <Fragment>
        {!isReadyAccount
          ? "загрузка..."
          : account.map((acc) => (
              <div className="messages" key={acc.id}>
                <div className="photo">
                  <img
                    src={acc.image}
                    alt="Logo"
                    className="Photo"
                    height="33px"
                    width="33px"
                  />
                </div>
                <div className="message">
                  <div className="name">
                    <p>{acc.name}</p>
                    <p>19:38 AM</p>
                  </div>
                  <div className="text">
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            ))}
      </Fragment>
    );
  }
}

export default MessageAuthor;
