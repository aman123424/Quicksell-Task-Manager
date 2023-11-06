import React from "react";
import "./card.scss";
import profileIcon from "../../assets/icons/profile.svg";

import high from "../../assets/icons/high.svg";
import medium from "../../assets/icons/medium.svg";
import low from "../../assets/icons/low.svg";
import noPriority from "../../assets/icons/more.svg";
import urgent from "../../assets/icons/urgent.svg";

import backlog from '../../assets/icons/backlog.svg'
import todo from '../../assets/icons/todo.svg'
import inProgress from '../../assets/icons/progress.svg'
import done from '../../assets/icons/done.svg'
import cancel from '../../assets/icons/cancel.svg'



function Card({ticket}) {
  const prioritySymbols = {
    4: urgent,
    3: high,
    2: medium,
    1: low,
    0: noPriority,
  };

  const statusIcons = {
    "Backlog": backlog,
    "Todo": todo,
    "In progress": inProgress,
    "Done": done,
    "Cancelled": cancel
  }

  const users = {
    "usr-1": "Anoop Sharma",
    "usr-2": "Yogesh",
    "usr-3": "Shankar Kumar",
    "usr-4": "Ramesh",
    "usr-5": "Suresh",
  }

  const getInitials = (fullName) => {
    let initials = "";
    const names = fullName.split(" ");
    for(let i = 0; i < names.length; i++){
      initials += names[i][0];
    }

    return initials;
  }

  return (
    <div className="card-container">
      <div className="top">
        <div className="cardId">{ticket.id}</div>
        <div className="profile">{getInitials(users[ticket.userId])}</div>
      </div>

      <div className="title-row">
        <img className={`status-icon ${ticket.status === "In progress" ? "progress" : ""}`} src={statusIcons[ticket.status]} alt="" />
        <div className="title">{ticket.title}</div>
      </div>

      <div className="tag-row">
        <img className="priority-icon" alt="" src={prioritySymbols[ticket.priority]} />
        <div className="tags">
          {ticket.tag.map((oneTag) => (
            <div className="tag">
              <span className="circle"></span>
              {oneTag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
