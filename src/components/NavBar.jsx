import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBox">
        <ul>
          <div className="h1Box">
            <h1>세월호 알아보기</h1>
          </div>
          <ArticleItem id={"세월호 영상"} link={"세월호영상"} />
          <ArticleItem id={"안전 교육 영상1"} link={"안전교육영상1"} />
          <ArticleItem id={"안전 교육 영상2"} link={"안전교육영상2"} />
          <ArticleItem id={"너를 보내고"} link={"너를보내고"} />
          <ArticleItem id={"천개의 바람이 되어"} link={"천개의바람이되어"} />
        </ul>
      </div>
      <div className="navBox">
        <ul>
          <div className="h1Box">
            <h1>퀴즈 풀어보기</h1>
          </div>
          <ArticleItem id={"문제 1"} />
          <ArticleItem id={"문제 2"} />
          <ArticleItem id={"문제 3"} />
          <ArticleItem id={"문제 4"} />
          <ArticleItem id={"문제 5"} />
          <ArticleItem id={"문제 6"} />
          <ArticleItem id={"문제 7"} />
          <ArticleItem id={"문제 8"} />
          <ArticleItem id={"문제 9"} />
          <ArticleItem id={"문제 10"} />
        </ul>
      </div>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  return (
    <div>
      <div className={({ isActive }) => (isActive ? "active" : undefined)}>
        <li>{id}</li>
      </div>
    </div>
  );
};

export default NavBar;
