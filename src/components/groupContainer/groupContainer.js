import React from "react";
import "./groupContainer.scss";
import Card from "../../ui-elements/card/card";
import Topbar from "../../ui-elements/topbar/topbar";

const GroupContainer = ({ Loading, list, title, titleIconSrc }) => {
  return (
    <div className="Group-Container">
      {/* <div className="Group-Heading">{title}</div> */}
      <Topbar count={list.length} title={title} titleIconSrc={titleIconSrc}/>
      {!Loading ? (
        <div>Please Wait</div>
      ) : (
        <>
          {list.map((ticket, index) => {
            return (
              <Card
                key={index}
                // id={ticket.id}
                // title={ticket.title}
                // tag={ticket.tag}
                // priority={ticket.priority}
                // status={ticket.status}
                ticket={ticket}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default GroupContainer;
