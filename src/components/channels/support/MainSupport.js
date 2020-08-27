import React, { Component } from "react";
import "../style/Main.scss";
import Header from "../../Header/Header";
import Chat from "./Chat";
import FooterSupport from "./FooterSupport";
import { connect } from "react-redux";
import { addSupportChat } from "../../../actions/actionCreate";

class Main extends Component {
  state = {
    taskText: "",
    data: new Date().getTime(),
  };
  newTime = () => {
    this.setState({
      data: new Date().getTime(),
    });
  };

  inputOnChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  };
  adddTask = () => {
    const { taskText } = this.state;

    const { addSupportChat } = this.props;
    addSupportChat(new Date().getTime(), taskText, false);
    this.setState({
      taskText: "",
    });
  };

  enterTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addSupportChat } = this.props;
      addSupportChat(new Date().getTime(), taskText, false);
      this.setState({
        taskText: "",
      });
    }
  };
  render() {
    const { SupportChat } = this.props;
    const { taskText } = this.state;

    return (
      <div className="Main">
        <Header />

        <Chat value={taskText} supTasks={SupportChat} />
        <FooterSupport
          onKeyPress={this.enterTask}
          OnChange={this.inputOnChange}
          value={taskText}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ SupportChat }) => ({
  SupportChat,
});
const mapDispatchToProps = {
  addSupportChat,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
