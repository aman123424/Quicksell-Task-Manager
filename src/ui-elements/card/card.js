import React from "react";
import "./card.scss";
import profileIcon from "../../assets/icons/profile.svg";

function Card({ id = "no", title = "", tag = "", status = "", priority = "" }) {
  return (
    <div className="Card-Container">
      
      <div className="top">
        <div className="cardId">{id}</div>
        <img className="profile" alt="" src={profileIcon} />
      </div>

      <div className="title-row">
        <img className="status-icon" src="" alt=""/>
        <div className="Card-Heading">{title}</div>
      </div>
      
      <div className="Card-Tag">
        <span className="Card-Priority">{priority}</span>
        <span className="Card-Feature">{tag[0]}</span>
      </div>
    </div>
  );
}

export default Card;
