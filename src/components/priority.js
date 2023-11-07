import React, { useState, useEffect } from "react";
import "./group.scss";
import GroupContainer from "./groupContainer/groupContainer";

import urgent from "../assets/icons/urgent.svg";
import high from "../assets/icons/high.svg";
import medium from "../assets/icons/medium.svg";
import low from "../assets/icons/low.svg";
import more from "../assets/icons/more.svg";

function GroupByPriority({ tickets = [], orderby }) {
  const [noPriorityTickets, setNoPriorityTickets] = useState([]);
  const [lowPriorityTickets, setLowPriorityTickets] = useState([]);
  const [mediumPriorityTickets, setMediumPriorityTickets] = useState([]);
  const [highPriorityTickets, setHighPriorityTickets] = useState([]);
  const [urgentPriorityTickets, setUrgentPriorityTickets] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    let cNoPriorityTickets = [];
    let cLowPriorityTickets = [];
    let cMediumPriorityTickets = [];
    let cHighPriorityTickets = [];
    let cUrgentPriorityTickets = [];

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].priority === 0) {
        cNoPriorityTickets = [...cNoPriorityTickets, tickets[i]];
        continue;
      }
      if (tickets[i].priority === 1) {
        cLowPriorityTickets = [...cLowPriorityTickets, tickets[i]];
        continue;
      }
      if (tickets[i].priority === 2) {
        cMediumPriorityTickets = [...cMediumPriorityTickets, tickets[i]];
        continue;
      }
      if (tickets[i].priority === 3) {
        cHighPriorityTickets = [...cHighPriorityTickets, tickets[i]];
        continue;
      }
      if (tickets[i].priority === 4) {
        cUrgentPriorityTickets = [...cUrgentPriorityTickets, tickets[i]];
        continue;
      }
    }

    cNoPriorityTickets.sort((a, b) => a.title.localeCompare(b.title));
    cLowPriorityTickets.sort((a, b) => a.title.localeCompare(b.title));
    cMediumPriorityTickets.sort((a, b) => a.title.localeCompare(b.title));
    cHighPriorityTickets.sort((a, b) => a.title.localeCompare(b.title));
    cUrgentPriorityTickets.sort((a, b) => a.title.localeCompare(b.title));

    setNoPriorityTickets(cNoPriorityTickets);
    setLowPriorityTickets(cLowPriorityTickets);
    setMediumPriorityTickets(cMediumPriorityTickets);
    setHighPriorityTickets(cHighPriorityTickets);
    setUrgentPriorityTickets(cUrgentPriorityTickets);
    setLoading(true);
  }, [tickets]);

  return (
    <div className="Groups-Container">
      <GroupContainer
        Loading={Loading}
        list={urgentPriorityTickets}
        title={"Urgent"}
        titleIconSrc={urgent}
        groupBy={"p"}
      />
      <GroupContainer
        Loading={Loading}
        list={highPriorityTickets}
        title={"High"}
        titleIconSrc={high}
        groupBy={"p"}
      />
      <GroupContainer
        Loading={Loading}
        list={mediumPriorityTickets}
        title={"Medium"}
        titleIconSrc={medium}
        groupBy={"p"}
      />
      <GroupContainer
        Loading={Loading}
        list={lowPriorityTickets}
        title={"Low"}
        titleIconSrc={low}
        groupBy={"p"}
      />
      <GroupContainer
        Loading={Loading}
        list={noPriorityTickets}
        title={"No Priority"}
        titleIconSrc={more}
        groupBy={"p"}
      />
    </div>
  );
}

export default GroupByPriority;
