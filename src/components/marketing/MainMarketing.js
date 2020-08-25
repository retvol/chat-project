import React, { Component } from "react";
import "../../App.css";
import Header from "../Header";
import Chat from "./Chat";
import FooterSupport from "./FooterSupport";
import { connect } from "react-redux";
import { addMarketingChat } from "../../actions/actionCreate";

class Main extends Component {
  state = {
    taskText: "",
  };

  inputOnChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  };
  adddTask = () => {
    const { taskText } = this.state;

    const { addMarketingChat } = this.props;
    addMarketingChat(new Date().getTime(), taskText, false);
    this.setState({
      taskText: "",
    });
  };

  enterTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addMarketingChat } = this.props;
      addMarketingChat(new Date().getTime(), taskText, false);
      this.setState({
        taskText: "",
      });
    }
  };
  render() {
    const { marketingChat } = this.props;
    const { taskText } = this.state;

    return (
      <div className="Main">
        <Header />
        <h1>mmmmmm</h1>
        <Chat value={taskText} supTasks={marketingChat} />
        <FooterSupport
          onKeyPress={this.enterTask}
          OnChange={this.inputOnChange}
          value={taskText}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ marketingChat }) => ({
  marketingChat,
});
const mapDispatchToProps = {
  addMarketingChat,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
