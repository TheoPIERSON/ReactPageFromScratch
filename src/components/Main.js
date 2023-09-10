import React from "react";
import "../styles/components/main.css";

const Main = () => {
  return (
    <div className="hero">
      <h1 className="firstTitle">Bring your</h1>
      <h1 className="secondTitle">Appetite for beer</h1>{" "}
      <div className="heroLogo">
        <img className="splash" src="./splash.png" alt="" />
        <img className="beer" src="./beer.webp" alt="" />
      </div>
      <div className="heroLink">
        <a className="exploreLink" href="#">
          Explore Oportunities
        </a>
        <div className="linkShadow"></div>
      </div>
    </div>
  );
};

export default Main;
