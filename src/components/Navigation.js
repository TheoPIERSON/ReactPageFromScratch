import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>KraftNails</li>
        </NavLink>
        <NavLink to="/about">
          <li>burger</li>
        </NavLink>
        <NavLink to="/contact">
          <li>contacts</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
