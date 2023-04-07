import React, { useCallback, useState } from "react";
import "../styles/navbar.css";
import SewolVideo from "./SewolVideo";
import SewolQuiz from "./quiz/sewol/SewolQuiz";

const NavBar = () => {
  const sewolList = [
    { title: "세월호 영상", id: 1, name: "first" },
    { title: "안전 교육 영상1", id: 2, name: "second" },
    { title: "안전 교육 영상2", id: 3, name: "third" },
    { title: "너를 보내고", id: 4, name: "fourth" },
    { title: "천개의 바람이 되어", id: 5, name: "fifth" },
  ];

  const sewolQuizList = [
    { title: "퀴즈1", id: 1, name: "one" },
    { title: "퀴즈2", id: 2, name: "two" },
    { title: "퀴즈3", id: 3, name: "three" },
    { title: "퀴즈4", id: 4, name: "four" },
    { title: "퀴즈5", id: 5, name: "five" },
  ];

  const sewolSafeList = [
    { title: "퀴즈1", id: 1, name: "one" },
    { title: "퀴즈2", id: 2, name: "two" },
    { title: "퀴즈3", id: 3, name: "three" },
    { title: "퀴즈4", id: 4, name: "four" },
    { title: "퀴즈5", id: 5, name: "five" },
  ];

  const [contentSewol, setContentSewol] = useState();

  const [contentSewolQuiz, setContentSewolQuiz] = useState();

  const [contentSafeQuiz, setContentSafeQuiz] = useState();

  const handleClickButtonSewol = (e) => {
    const { name } = e.target;
    setContentSewol(name);
    setContentSewolQuiz(false);
    setContentSafeQuiz(false);
    console.log(name);
  };

  const handleClickButtonSewolQuiz = (e) => {
    const { name } = e.target;
    setContentSewolQuiz(name);
    setContentSewol(false);
    setContentSafeQuiz(false);
    console.log(name);
  };

  const handleClickButtonSafeQuiz = (e) => {
    const { name } = e.target;
    setContentSafeQuiz(name);
    setContentSewol(false);
    setContentSewolQuiz(false);
    console.log(name);
  };

  const selectSewol = {
    first: <SewolVideo />,
    second: <SewolVideo />,
    third: <SewolVideo />,
    fourth: <SewolVideo />,
    fifth: <SewolVideo />,
  };

  const selectQuiz1 = {
    one: <SewolQuiz />,
    two: <SewolQuiz />,
    three: <SewolQuiz />,
    four: <SewolQuiz />,
    five: <SewolQuiz />,
  };

  const selectQuiz2 = {
    one: <SewolQuiz />,
    two: <SewolQuiz />,
    three: <SewolQuiz />,
    four: <SewolQuiz />,
    five: <SewolQuiz />,
  };

  return (
    <div className="navBar">
      <div className="navBox">
        <div className="h1Box">
          <h1>세월호 알아보기</h1>
        </div>
        <ul>
          {sewolList.map((data) => (
            <button
              className="Btn"
              onClick={handleClickButtonSewol}
              name={data.name}
              key={data.id}
            >
              {data.title}
            </button>
          ))}
        </ul>
      </div>
      <div className="navBox">
        <div className="h1Box">
          <h1>세월호 관련 퀴즈 풀어보기</h1>
        </div>
        <ul>
          {sewolQuizList.map((data) => (
            <button
              className="Btn"
              onClick={handleClickButtonSewolQuiz}
              name={data.name}
              key={data.id}
            >
              {data.title}
            </button>
          ))}
        </ul>
      </div>
      <div className="navBox">
        <div className="h1Box">
          <h1>안전 관련 퀴즈 풀어보기</h1>
        </div>
        <ul>
          {sewolSafeList.map((data) => (
            <button
              className="Btn"
              onClick={handleClickButtonSafeQuiz}
              name={data.name}
              key={data.id}
            >
              {data.title}
            </button>
          ))}
        </ul>
      </div>
      {contentSewol && <div>{selectSewol[contentSewol]}</div>}
      {contentSewolQuiz && <div>{selectQuiz1[contentSewolQuiz]}</div>}
      {contentSafeQuiz && <div>{selectQuiz2[contentSafeQuiz]}</div>}
    </div>
  );
};

export default NavBar;
