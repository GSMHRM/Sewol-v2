import React from "react";
import "../styles/home.css";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <Outlet />
      <ul>
        <ArticleItem id={"세월호 영상"} />
        <ArticleItem id={"안전 교육 영상1"} />
        <ArticleItem id={"안전 교육 영상2"} />
        <ArticleItem id={"너를 보내고"} />
        <ArticleItem id={"천개의 바람이 되어"} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {id}
      </NavLink>
    </li>
  );
};

export default Home;
