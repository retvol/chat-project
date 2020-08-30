import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Profile from "./components/profile/Profile";
import { connect } from "react-redux";
import { setFriends } from "./actions/setFriends";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import MainContainer from "./components/main/MainContainer";
import EmptyMain from "./components/main/EmptyMain";
import {addMessage, setChannels} from "./actions/actionCreate";

class App extends Component {

  componentDidMount() {
    const { setFriends, setChannels } = this.props;

    axios.get("friends.json").then(({ data }) => {
      setFriends(data);
    });
    axios.get("channels.json").then(({ data }) => {
      setChannels(data);
    });
    console.log(setChannels);
  }

  render() {
    const { profile, isReady, chats } = this.props;
    console.log(profile);

    return (
      <div className="App">
        <Navigation profile={profile} isReady={isReady} chats={chats} />
        <Switch>
          {<Route exact path="/" render={() => <EmptyMain />} />}
          {chats.map((chat) => (
            <Route
              exact
              path={"/" + chat.chatId}
              render={() => <MainContainer chatId={chat.chatId} />}
            />
          ))}
        </Switch>
        <Profile />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  profile: store.profileState.items,
  isReady: store.profileState.isReady,
  chats: store.chatState,
});

const mapDispatchToProps = {
  setFriends,
  addMessage,
  setChannels,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
