import React, { Component } from "react";
import "./chat.scss";
import Message from "../message/Message";
import { connect } from "react-redux";
import { setAccount } from "../../actions/setAccount";

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
const mapStateToProps = (store) => ({
  account: store.accountState.account,
  isReadyAccount: store.accountState.isReady,
});

const mapDispatchToProps = {
  setAccount,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
