import { useState, useEffect } from "react";
import "./App.scss";
import GroupByUsers from "./components/users";
import GroupByPriority from "./components/priority";
import GroupByStatus from "./components/taskstatus";
import Header from "./components/header/header";

function App() {
  
  //Created the state variables required to store the users and tasks we are fetching from the backend
  const [data, setData] = useState([]);
  const [tickets, setTickets] = useState("NO");
  const [users, setUsers] = useState([]);

  const getData = async () => {
    await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setTickets(data.tickets);
    setUsers(data.users);
  }, [data]);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [Groupby, setGroupby] = useState(
    localStorage.getItem("Groupby") || "priority"
  );
  const [Orderby, setOrderby] = useState(
    localStorage.getItem("Orderby") || "priority"
  );

  const groupbyHandler = (e) => {
    setGroupby(e.target.value);
  };

  const orderbyHandler = (e) => {
    setOrderby(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("Groupby", Groupby);
  }, [Groupby]);

  useEffect(() => {
    localStorage.setItem("Orderby", Orderby);
  }, [Orderby]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const divToExclude = document.getElementById("menu-id");
      const divDisplayToggle = document.getElementById("menu-toggle");
      if (
        divToExclude &&
        !divToExclude.contains(event.target) &&
        !divDisplayToggle.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  console.log("data: ", data);

  return (
    <div className="App">
      <Header
        Orderby={Orderby}
        Groupby={Groupby}
        groupbyHandler={groupbyHandler}
        orderbyHandler={orderbyHandler}
        showMenu={showMenu}
        toggleMenu={toggleMenu}
      />

      {tickets === "NO" ? (
        <div>Please Wait</div>
      ) : Groupby === "priority" ? (
        <GroupByPriority orderby={Orderby} tickets={tickets} />
      ) : Groupby === "users" ? (
        <GroupByUsers orderby={Orderby} tickets={tickets} users={users} />
      ) : (
        <GroupByStatus orderby={Orderby} tickets={tickets} />
      )}
    </div>
  );
}

export default App;
