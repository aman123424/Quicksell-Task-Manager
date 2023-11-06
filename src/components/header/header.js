import React from "react";
import "./header.scss";
import down from '../../assets/icons/down.svg';
import filter from '../../assets/icons/filter.svg'

const Header = ({
  toggleMenu,
  showMenu,
  Groupby,
  groupbyHandler,
  orderbyHandler,
  Orderby,
}) => {
  return (
    <div className="Header">
      <div id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
        <img alt="" src={filter} className="icon"/>
        <div className="text">Display</div>
        <img className="icon" alt="" src={down}/>
      </div>
      {showMenu && (
        <div id="menu-id" className="menu active">
          <div className="select">
            <div>Grouping</div>
            <select
              value={Groupby}
              onChange={groupbyHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="priority">Priority</option>
              <option value="users">Users</option>
              <option value="status">Status</option>
            </select>
          </div>
          <div className="select">
            <div>Ordering</div>
            <select
              value={Orderby}
              onChange={orderbyHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
