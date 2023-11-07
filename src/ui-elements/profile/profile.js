import React from "react";
import "./profile.scss";

const Profile = ({ user }) => {
  const getInitials = (fullName) => {
    let initials = "";
    const names = fullName ? fullName.split(" ") : [""];
    for (let i = 0; i < names.length; i++) {
      initials += names[i][0];
    }

    return initials.toUpperCase();
  };

  return (
    <div className="profile-wrapper">
      <div className="profile">{getInitials(user.name)}</div>
      <div
        className={`availability ${user.available ? "available" : ""}`}
      ></div>
    </div>
  );
};

export default Profile;
