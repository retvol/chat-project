import React, { Component } from "react";
import "../components/main/main.scss";
import Chat from "../components/chat/Chat";
import { connect } from "react-redux";
import { addMessage } from ".././actions/actionCreate";
import MessageInput from "../components/messageInput/MessageInput";
import Header from "../components/header/Header";

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
      addMessage(chatId, new Date().toLocaleString(), message);
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

const mapStateToProps = ({ chatState }) => ({
  chats: chatState,
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);