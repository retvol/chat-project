import React, { Component } from "react";
import "../../App.css";
import Header from "../Header";
import Chat from "./Chat";
import FooterSupport from "./FooterSupport";
import { connect } from "react-redux";
import { addJobsChat } from "../../actions/actionCreate";

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

    const { addJobsChat } = this.props;
    addJobsChat(new Date().getTime(), taskText, false);
    this.setState({
      taskText: "",
    });
  };

  enterTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addJobsChat } = this.props;
      addJobsChat(new Date().getTime(), taskText, false);
      this.setState({
        taskText: "",
      });
    }
  };
  render() {
    const { jobsChat } = this.props;
    const { taskText } = this.state;

    return (
      <div className="Main">
        <Header />
        <h1>mmmmmm</h1>
        <Chat value={taskText} supTasks={jobsChat} />
        <FooterSupport
          onKeyPress={this.enterTask}
          OnChange={this.inputOnChange}
          value={taskText}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ jobsChat }) => ({
  jobsChat,
});
const mapDispatchToProps = {
  addJobsChat,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
