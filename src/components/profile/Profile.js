import React, { Component } from "react";
import "./profile.scss";
import ProfileInfo from "./ProfileInfo";
import ProfileSocialNetworks from "./ProfileSocialNetworks";
import ProfileAvatar from "./ProfileAvatar";
import ProfileButton from "./profileButton";
import ProfileArrow from "./ProfileArrow";
import ProfileName from "./ProfileName";
import ProfileProff from "./ProfileProff";
class Profile extends Component {
  render() {
    const { account, isReadyAccount } = this.props;
    return (
      <div className="profile">
        {!isReadyAccount
          ? "загрузка..."
          : account.map((acc) => (
              <div key={acc.id}>
                <ProfileAvatar avatar={acc.image} />
                <ProfileName name={acc.name} />
                <ProfileProff proff={acc.proff} />
                <ProfileSocialNetworks />
                <ProfileButton />
                <ProfileInfo info={acc} />
              </div>
            ))}
        <ProfileArrow />
      </div>
    );
  }
}

export default Profile;
