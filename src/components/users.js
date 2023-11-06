import React from "react";
import "./group.scss";
import GroupContainer from "./groupContainer/groupContainer";

function GroupByUsers({ tickets = [], orderby, users = [] }) {
  function ticketsbyUser({ userId, userName }) {
    let usertickets = [];
    // let userName=''

    // for(let j=0;j<userData;j++){
    //     if(userData[i].id===userid){
    //         userName=userData[i].name
    //         break
    //     }
    // }

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].userId === userId) {
        usertickets = [...usertickets, tickets[i]];
        continue;
      }
    }

    if (orderby === "priority") {
      usertickets.sort((a, b) => b.priority - a.priority);
    } else {
      usertickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return (
      <GroupContainer Loading={true} list={usertickets} title={userName} />
    );
  }

  function CallUser() {
    const Groups = [];

    for (let i = 0; i < users.length; i++) {
      let newGroup = ticketsbyUser({
        userId: users[i].id,
        userName: users[i].name,
      });
      Groups.push(newGroup);
    }

    return Groups;
  }

  return (
    <div className="Groups-Container">
      <CallUser />
    </div>
  );
}

export default GroupByUsers;
