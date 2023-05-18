import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function LeftNavBar() {
  return (
    <div className="left-nav-bar">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/daily-activity" exact activeClassName="active">Daily Activity</NavLink>
      </li>
      <li>
        <NavLink to="/previous-activities" exact activeClassName="active">Previous Activities</NavLink>
      </li>
      <li>
        <NavLink to="/parent-notes" exact activeClassName="active">Parent Notes</NavLink>
      </li>
    </ul>
  </div>
  );
}

export default LeftNavBar;
