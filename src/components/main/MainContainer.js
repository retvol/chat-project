import React, { Component } from "react";
import "./main.scss";
import Chat from "../chat/Chat";
import { connect } from "react-redux";
import { addMessage } from "../../actions/actionCreate";
import Header from "../header/Header";
import MessageInput from "../messageInput/MessageInput";

const ENTER_BTN = "Enter";

class MainContainer extends Component {
  state = {
    message: "",
  };

  onChangeInput = ({ target: { value } }) => {
    this.setState({
      message: value,
    });
  };

  clearMessage = () => {
    this.setState({
      message: "",
    });
  };

  sendMessage = ({ key }) => {
    const { message } = this.state;
    if (key === ENTER_BTN) {
      const { addMessage, chatId } = this.props;
      addMessage(chatId, new Date().getTime(), message);
      this.clearMessage();
    }
  };

  getMessageList = () => {
    const { chats, chatId } = this.props;
    const chat = chats.find((chat) => chat.chatId === chatId);
    return chat.messageList;
  };

  render() {
    const { message } = this.state;

    return (
      <div className="main">
        <Header />
        <Chat messageList={this.getMessageList()} />
        <MessageInput
          onKeyPress={this.sendMessage}
          onChange={this.onChangeInput}
          value={message}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  chats: store.chatState,
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
