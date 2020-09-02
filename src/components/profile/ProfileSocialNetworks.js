import React, { Component } from "react";
import "./profile.scss";
import Facebook from "../../pictures/Facebook.svg";
import Twitter from "../../pictures/Twitter.svg";
import Instagram from "../../pictures/Instagram.svg";
import Link from "../../pictures/Link.svg";
class ProfileSocialNetworks extends Component {
  render() {
    return (
      <div className="social-networks">
        <a href="https://vk.com/im?sel=78779244">
          <div className="first-circle">
            <img src={Facebook} alt="Logo" className="facebook" />
          </div>
        </a>
        <a href="https://vk.com/im?sel=78779244">
          <div className="circle">
            <img src={Twitter} alt="Logo" className="twitter" />
          </div>
        </a>
        <a href="https://vk.com/im?sel=78779244">
          <div className="circle">
            <img src={Instagram} alt="Logo" className="instagram" />
          </div>
        </a>
        <a href="https://vk.com/im?sel=78779244">
          <div className="circle">
            <img src={Link} alt="Logo" className="link" />
          </div>
        </a>
      </div>
    );
  }
}

export default ProfileSocialNetworks;
