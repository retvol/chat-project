import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Profile from "./components/profile/Profile";
import { connect } from "react-redux";
import { setFriends } from "./actions/setFriends";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import MainContainer from "./components/main/MainContainer";
import EmptyMain from "./components/main/EmptyMain";
import { addMessage, setChannels } from "./actions/actionCreate";
import { setAccount } from "./actions/setAccount";

class App extends Component {
  componentDidMount() {
    const { setFriends, setChannels, setAccount } = this.props;
    setAccount();
    setChannels();
    setFriends();
  }

  render() {
    const {
      profile,
      isReady,
      chats,
      setAccount,
      account,
      isReadyAccount,
    } = this.props;

    return (
      <div className="App">
        <Navigation profile={profile} isReady={isReady} chats={chats} />
        <Switch
          setAccount={setAccount}
          account={account}
          isReadyAccount={isReadyAccount}
        >
          {<Route exact path="/" render={() => <EmptyMain />} />}
          {chats.map((chat) => (
            <Route
              setAccount={setAccount}
              account={account}
              isReadyAccount={isReadyAccount}
              exact
              path={"/" + chat.chatId}
              key={chat.chatId}
              render={() => (
                <MainContainer
                  chatId={chat.chatId}
                  setAccount={setAccount}
                  account={account}
                  isReadyAccount={isReadyAccount}
                />
              )}
            />
          ))}
        </Switch>
        <Profile
          setAccount={setAccount}
          account={account}
          isReadyAccount={isReadyAccount}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  profile: store.profileState.items,
  isReady: store.profileState.isReady,
  chats: store.chatState,
  account: store.accountState.account,
  isReadyAccount: store.accountState.isReady,
});

const mapDispatchToProps = {
  setFriends,
  addMessage,
  setChannels,
  setAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
