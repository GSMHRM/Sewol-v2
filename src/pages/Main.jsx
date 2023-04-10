import React, { useState } from "react";
import Logo from "../img/sewolLogo.png";
import "../styles/main.css";
import Sewol from "./Sewol";

function Main() {
  const [changeMain, setChangeMain] = useState(true);

  const handleClick = () => {
    setChangeMain(false);
  };
  return (
    <div>
      {changeMain ? (
        <div className="main">
          <img src={Logo} alt="세월호 로고" />
          <button onClick={handleClick}>세월호 알아보러가기</button>
        </div>
      ) : (
        <Sewol />
      )}
    </div>
  );
}

export default Main;
