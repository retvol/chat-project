import React, { Component } from "react";
import "../App.css";
import Avatar from "../Picters/Avatar.svg";
import ShapeProfile from "../Picters/ShapeProfile.svg";
import Facebook from "../Picters/Facebook.svg";
import Twitter from "../Picters/Twitter.svg";
import Instagram from "../Picters/Instagram.svg";
import Link from "../Picters/Link.svg";
import ButtonArrow from "../Picters/ButtonArrow.svg";
import ProfileButtonArrow from "../Picters/ProfileButtonArrow.svg";
class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="Avatar">
          <img src={Avatar} alt="Logo" className="Avatar" />
        </div>
        <div className="Profile-list">
          <h6 className="Profile-name">Amilia Luna</h6>
          <img src={ShapeProfile} alt="Logo" className="ShapeProfile " />
        </div>
        <p className="Proff">Ul Designer</p>
        <div className="Social-networks">
          <a href="https://vk.com/im?sel=78779244">
            <div className="first-circle">
              <img src={Facebook} alt="Logo" className="Facebook" />
            </div>
          </a>
          <a href="https://vk.com/im?sel=78779244">
            <div className="circle">
              <img src={Twitter} alt="Logo" className="Twitter" />
            </div>
          </a>
          <a href="https://vk.com/im?sel=78779244">
            <div className="circle">
              <img src={Instagram} alt="Logo" className="Instagram" />
            </div>
          </a>
          <a href="https://vk.com/im?sel=78779244">
            <div className="circle">
              <img src={Link} alt="Logo" className="Link" />
            </div>
          </a>
        </div>
        <div className="Profile-button">
          <button className="Massage-button">Massage</button>
          <button className="Button-arrow">
            <img src={ButtonArrow} alt="Logo" className="Arrow" />
          </button>
        </div>
        <div className="Profil-info">
          <p className="Profile-username">Username</p>
          <h6 className="Profile-username-user">@Amilia_lu</h6>
          <p className="Profile-username">Email</p>
          <h6 className="Profile-username-user">a-luna@gmail.com</h6>
          <p className="Profile-username">Skype</p>
          <h6 className="Profile-username-user">amiluna</h6>
          <p className="Profile-username">Timezone</p>
          <h6 className="Profile-username-user">2:21 PM Local time</h6>
        </div>
        <div className="Profile-arrow">
          <button className="Profile-arrow-button">
            <img
              src={ProfileButtonArrow}
              alt="Logo"
              className="Profile-Arrow-Button-Logo"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
