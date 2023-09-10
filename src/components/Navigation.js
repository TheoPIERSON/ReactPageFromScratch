import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li className="logoName">
            Kraft<span>Binch</span>
          </li>
        </NavLink>
        <NavLink to="/about">
          <li>
            <div class="container" go="myFunction(this)">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </li>
        </NavLink>
        <NavLink to="/contact" className="contact">
          <li>contacts</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
