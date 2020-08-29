import React, { Component } from "react";
import "./profile.scss";
import Avatar from "../../pictures/Avatar.svg";
import ShapeProfile from "../../pictures/ShapeProfile.svg";
import Facebook from "../../pictures/Facebook.svg";
import Twitter from "../../pictures/Twitter.svg";
import Instagram from "../../pictures/Instagram.svg";
import Link from "../../pictures/Link.svg";
import ButtonArrow from "../../pictures/ButtonArrow.svg";
import ProfileButtonArrow from "../../pictures//ProfileButtonArrow.svg";
class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="avatar">
          <img src={Avatar} alt="Logo" className="avatar" />
        </div>
        <div className="profile-list">
          <h6 className="profile-name">Amilia Luna</h6>
          <img src={ShapeProfile} alt="Logo" className="shapeProfile " />
        </div>
        <p className="proff">Ul Designer</p>
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
        <div className="profile-button">
          <button className="massage-button">Massage</button>
          <button className="button-arrow">
            <img src={ButtonArrow} alt="Logo" className="arrow" />
          </button>
        </div>
        <div className="profil-info">
          <p className="profile-username">Username</p>
          <h6 className="profile-username-user">@Amilia_lu</h6>
          <p className="profile-username">Email</p>
          <h6 className="profile-username-user">a-luna@gmail.com</h6>
          <p className="profile-username">Skype</p>
          <h6 className="profile-username-user">amiluna</h6>
          <p className="profile-username">Timezone</p>
          <h6 className="profile-username-user">2:21 PM Local time</h6>
        </div>
        <div className="profile-arrow">
          <button className="profile-arrow-button">
            <img
              src={ProfileButtonArrow}
              alt="Logo"
              className="profile-arrow-button-logo"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
