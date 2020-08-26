import React, { Component } from "react";
import "../style/Main.scss";
import Header from "../../Header/Header";
import Chat from "./Chat";
import FooterSupport from "./FooterSupport";
import { connect } from "react-redux";
import { addAustreliaChat } from "../../../actions/actionCreate";

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

    const { addAustreliaChat } = this.props;
    addAustreliaChat(new Date().getTime(), taskText, false);
    this.setState({
      taskText: "",
    });
  };

  enterTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addAustreliaChat } = this.props;
      addAustreliaChat(new Date().getTime(), taskText, false);
      this.setState({
        taskText: "",
      });
    }
  };
  render() {
    const { austreliaChat } = this.props;
    const { taskText } = this.state;

    return (
      <div className="Main">
        <Header />

        <Chat value={taskText} supTasks={austreliaChat} />
        <FooterSupport
          onKeyPress={this.enterTask}
          OnChange={this.inputOnChange}
          value={taskText}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ austreliaChat }) => ({
  austreliaChat,
});
const mapDispatchToProps = {
  addAustreliaChat,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
