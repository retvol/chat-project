import React, { Component } from "react";
import Scroll from "./components/Scroll";
import Main from "./components/general/Main";
import MainSupport from "./components/support/MainSupport";
import Profile from "./components/Profile";
import { connect } from "react-redux";
import { setBooks } from "./actions/setBooks";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import MainMarketing from "./components/marketing/MainMarketing";
import MainAustrelia from "./components/austrelia/MainAustrelia";
import MainThailand from "./components/thailand/MainThailand";
import MainBali from "./components/bali/MainBali";
import MainPoland from "./components/poland/MainPoland";
import MainJobs from "./components/jobs/MainJobs";
import MainStartups from "./components/startups/MainStartups";
import MainItaly from "./components/italy/MainItaly";
import MainFreelance from "./components/freelance/MainFreelance";
class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get("books.json").then(({ data }) => {
      setBooks(data);
      console.log(setBooks(data));
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
  setBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
