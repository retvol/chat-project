import React, { Component } from "react";
import "../App.css";
import NovadButton from "../Picters/NovadButton.svg";
import Setting from "../Picters/Setting.svg";
import Cloud from "../Picters/Cloud.svg";

import FriendList from "./FriendList";
import { Link } from "react-router-dom";
class Scroll extends Component {
  render() {
    const { profile, isReady } = this.props;
    return (
      <div className="Scroll">
        <div className="Scroll-List">
          <div className="Novad-list">
            <p>Novad List</p>
            <button className="Novad-list-button">
              <img src={NovadButton} alt="Logo" className="Nova-button" />
            </button>
            <button className="Setting">
              <img src={Setting} alt="Logo" className="Setting-icon" />
            </button>
          </div>
          <div className="Treds">
            <button className="Treds-button">
              <img src={Cloud} alt="Logo" className="Cloud" />
            </button>
            <p>All treads</p>
          </div>
          <div className="Chaneles-p">
            <p>Chaneles</p>
            <p>11</p>
          </div>
          <div className="Channels">
            <Link to="/">
              <div className="Channels-href">
                <p># General</p>
              </div>
            </Link>
            <Link to="/mainSupport">
              <div className="Channels-href">
                <p># support</p>
              </div>
            </Link>
            <Link to="/marketing">
              <div className="Channels-href">
                <p># marketing</p>
              </div>
            </Link>
            <Link to="/thailand">
              <div className="Channels-href">
                <p># thailand</p>
              </div>
            </Link>
            <Link to="/bali">
              <div className="Channels-href">
                <p># bali</p>
              </div>
            </Link>
            <Link to="/poland">
              <div className="Channels-href">
                <p># poland</p>
              </div>
            </Link>
            <Link to="/austrelia">
              <div className="Channels-href">
                <p># australia</p>
              </div>
            </Link>
            <Link to="/jobs">
              <div className="Channels-href">
                <p># jobs</p>
              </div>
            </Link>
            <Link to="/startups">
              <div className="Channels-href">
                <p># startups</p>
              </div>
            </Link>
            <Link to="/italy">
              <div className="Channels-href">
                <p># italy</p>
              </div>
            </Link>
            <Link to="/freelance">
              <div className="Channels-href">
                <p># freelance</p>
              </div>
            </Link>
          </div>
          <div className="Friends">
            <p>friends</p>
            <p>82</p>
          </div>
          <div className="Friends-list">
            <div>
              {!isReady
                ? "загрузка..."
                : profile.map((prof) => <FriendList prof={prof} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scroll;
