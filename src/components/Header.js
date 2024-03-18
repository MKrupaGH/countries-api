import React from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header header-light">
      <div>Where in the world?</div>
      <div className="dark-mode">
        <FontAwesomeIcon icon={faMoon} />
        <div>Dark Mode</div>
      </div>
    </div>
  );
}

export default Header;
