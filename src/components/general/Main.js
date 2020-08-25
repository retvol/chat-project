import React, { Component } from "react";
import "../../App.css";
import Header from "../Header";
import Chat from "./Chat";
import FooterGeneral from "./FooterGeneral";
import { connect } from "react-redux";
import { addTask } from "../../actions/actionCreate";

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

    const { addTask } = this.props;
    addTask(new Date().getTime(), taskText, false);
    this.setState({
      taskText: "",
    });
  };

  enterTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addTask } = this.props;
      addTask(new Date().getTime(), taskText, false);
      this.setState({
        taskText: "",
      });
    }
  };
  render() {
    const { task } = this.props;
    const { taskText } = this.state;

    return (
      <div className="Main">
        <Header />
        <h1>mmmmmm</h1>
        <Chat value={taskText} task={task} />
        <FooterGeneral
          onKeyPress={this.enterTask}
          OnChange={this.inputOnChange}
          value={taskText}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ task }) => ({
  task,
});
const mapDispatchToProps = {
  addTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
