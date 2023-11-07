import React, { useState, useEffect } from "react";
import "./card.scss";
import high from "../../assets/icons/high.svg";
import medium from "../../assets/icons/medium.svg";
import low from "../../assets/icons/low.svg";
import noPriority from "../../assets/icons/more.svg";
import urgent from "../../assets/icons/urgent.svg";
import backlog from "../../assets/icons/backlog.svg";
import todo from "../../assets/icons/todo.svg";
import inProgress from "../../assets/icons/progress.svg";
import done from "../../assets/icons/done.svg";
import cancel from "../../assets/icons/cancel.svg";
import Profile from "../profile/profile";

function Card({ ticket, groupBy }) {
  const [user, setUser] = useState({});

  const getData = async () => {
    await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.users.length; i++) {
          if (ticket.userId === data.users[i].id) {
            setUser(data.users[i]);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getData();
  }, []);

  const prioritySymbols = {
    4: urgent,
    3: high,
    2: medium,
    1: low,
    0: noPriority,
  };

  const statusIcons = {
    Backlog: backlog,
    Todo: todo,
    "In progress": inProgress,
    Done: done,
    Cancelled: cancel,
  };

  return (
    <div className="card-container">
      <div className="top">
        <div className="cardId">{ticket.id}</div>
        {groupBy === "u" ? null : <Profile user={user} />}
      </div>

      <div className="title-row">
        {groupBy === "s" ? null : (
          <img
            className={`status-icon ${
              ticket.status === "In progress" || ticket.status === "Done"
                ? ""
                : "filter"
            }`}
            src={statusIcons[ticket.status]}
            alt=""
          />
        )}
        <div className="title">{ticket.title}</div>
      </div>

      <div className="tag-row">
        {groupBy === "p" ? null : (
          <img
            className="priority-icon"
            alt=""
            src={prioritySymbols[ticket.priority]}
          />
        )}
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
