import React, { useState } from "react";
import Logo from "../img/sewolLogo.png";
import "../styles/intro.css";
import Home from "./Home";
import { FaRibbon } from "react-icons/fa";

function Intro() {
  const [changeMain, setChangeMain] = useState(true);

  const handleClick = () => {
    setChangeMain(false);
  };
  return (
    <div>
      {changeMain ? (
        <div className="intro">
          <div className="iconBox">
            <FaRibbon className="sewolIcons" onClick={handleClick} />
          </div>
          <img src={Logo} alt="세월호 로고" className="sewolLogo" />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Intro;
