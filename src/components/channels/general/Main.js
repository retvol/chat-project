import React, { Component } from "react";
import "../style/Main.scss";
import Header from "../../Header/Header";
import Chat from "./Chat";
import FooterGeneral from "./FooterGeneral";
import { connect } from "react-redux";
import { addGeneralChat } from "../../../actions/actionCreate";

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

    const { addGeneralChat } = this.props;
    addGeneralChat(new Date().getTime(), taskText, false);
    this.setState({
      taskText: "",
    });
  };

  enterTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addGeneralChat } = this.props;
      addGeneralChat(new Date().getTime(), taskText, false);
      this.setState({
        taskText: "",
      });
    }
  };
  render() {
    const { generalChat } = this.props;
    const { taskText } = this.state;

    return (
      <div className="Main">
        <Header />

        <Chat value={taskText} task={generalChat} />
        <FooterGeneral
          onKeyPress={this.enterTask}
          OnChange={this.inputOnChange}
          value={taskText}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ generalChat }) => ({
  generalChat,
});
const mapDispatchToProps = {
  addGeneralChat,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
