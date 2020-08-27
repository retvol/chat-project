import React, { Component } from "react";
import Scroll from "./components/scroll/Scroll";
import Main from "./components/channels/general/Main";
import MainSupport from "./components/channels/support/MainSupport";
import Profile from "./components/profile/Profile";
import { connect } from "react-redux";
import { setFriends } from "./actions/setBooks";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import MainMarketing from "./components/channels/marketing/MainMarketing";
import MainAustrelia from "./components/channels/austrelia/MainAustrelia";
import MainThailand from "./components/channels/thailand/MainThailand";
import MainBali from "./components/channels/bali/MainBali";
import MainPoland from "./components/channels/poland/MainPoland";
import MainJobs from "./components/channels/jobs/MainJobs";
import MainStartups from "./components/channels/startups/MainStartups";
import MainItaly from "./components/channels/italy/MainItaly";
import MainFreelance from "./components/channels/freelance/MainFreelance";
class App extends Component {
  componentDidMount() {
    const { setFriends } = this.props;
    axios.get("friends.json").then(({ data }) => {
      setFriends(data);
      console.log(setFriends(data));
    });
  }

  render() {
    const { profile, isReady } = this.props;
    console.log(profile);

    return (
      <div className="App">
        <Scroll profile={profile} isReady={isReady} />
        <Switch>
          <Route exact path="/" render={() => <Main />}></Route>
          <Route path="/mainSupport" render={() => <MainSupport />}></Route>
          <Route path="/marketing" render={() => <MainMarketing />}></Route>
          <Route path="/thailand" render={() => <MainThailand />}></Route>
          <Route path="/bali" render={() => <MainBali />}></Route>
          <Route path="/poland" render={() => <MainPoland />}></Route>
          <Route path="/austrelia" render={() => <MainAustrelia />}></Route>
          <Route path="/jobs" render={() => <MainJobs />}></Route>
          <Route path="/startups" render={() => <MainStartups />}></Route>
          <Route path="/italy" render={() => <MainItaly />}></Route>
          <Route path="/freelance" render={() => <MainFreelance />}></Route>
        </Switch>
        {/* <Main
            onKeyPress={this.enterTask}
            OnChange={this.inputOnChange}
            value={taskText}
            task={task}
            data={data}
            newTime={this.newTime}
          /> */}

        <Profile />
      </div>
    );
  }
}
const mapStateToProps = ({ profile, isReady }) => ({
  profile: profile.items,
  isReady: profile.isReady,
});
const mapDispatchToProps = {
  setFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
