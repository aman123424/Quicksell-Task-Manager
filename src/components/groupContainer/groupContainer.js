import React from "react";
import "./groupContainer.scss";
import Card from "../../ui-elements/card/card";
import Topbar from "../../ui-elements/topbar/topbar";

const GroupContainer = ({ Loading, list, title, titleIconSrc }) => {
  return (
    <div className="Group-Container">
      {/* <div className="Group-Heading">{title}</div> */}
      <Topbar count={0} title={title} titleIconSrc={titleIconSrc}/>
      {!Loading ? (
        <div>Please Wait</div>
      ) : (
        <>
          {list.map((ticket, index) => {
            return (
              <Card
                key={index}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                priority={ticket.priority}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default GroupContainer;
