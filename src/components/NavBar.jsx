import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBox">
        <div className="h1Box">
          <h1>세월호 알아보기</h1>
        </div>
        <ul>
          <li>세월호 영상</li>
          <li>안전 교육 영상1</li>
          <li>안전 교육 영상2</li>
          <li>너를 보내고</li>
          <li>천개의 바람이 되어</li>
        </ul>
      </div>
      <div className="navBox">
        <div className="h1Box">
          <h1>퀴즈 풀어보기</h1>
        </div>
        <ul>
          <li>퀴즈1</li>
          <li>퀴즈2</li>
          <li>퀴즈3</li>
          <li>퀴즈4</li>
          <li>퀴즈5</li>
          <li>퀴즈6</li>
          <li>퀴즈7</li>
          <li>퀴즈8</li>
          <li>퀴즈9</li>
          <li>퀴즈10</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
