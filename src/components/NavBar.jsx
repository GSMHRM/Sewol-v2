import React, { useCallback, useState } from "react";
import "../styles/navbar.css";
import SewolVideo from "./SewolVideo";
import Quiz1 from "./Quiz1";

const NavBar = () => {
  const sewolList = [
    { title: "세월호 영상", id: 1, name: "first" },
    { title: "안전 교육 영상1", id: 2, name: "second" },
    { title: "안전 교육 영상2", id: 3, name: "third" },
    { title: "너를 보내고", id: 4, name: "fourth" },
    { title: "천개의 바람이 되어", id: 5, name: "fifth" },
  ];

  const quizList = [
    { title: "퀴즈1", id: 1, name: "one" },
    { title: "퀴즈2", id: 2, name: "two" },
    { title: "퀴즈3", id: 3, name: "three" },
    { title: "퀴즈4", id: 4, name: "four" },
    { title: "퀴즈5", id: 5, name: "five" },
    { title: "퀴즈6", id: 6, name: "six" },
    { title: "퀴즈7", id: 7, name: "seven" },
    { title: "퀴즈8", id: 8, name: "eight" },
    { title: "퀴즈9", id: 9, name: "nine" },
    { title: "퀴즈10", id: 10, name: "ten" },
  ];

  const [contentSewol, setContentSewol] = useState();

  const [contentQuiz, setContentQuiz] = useState();

  const handleClickButtonSewol = (e) => {
    const { name } = e.target;
    setContentSewol(name);
    setContentQuiz(false);
    console.log(name);
  };

  const handleClickButtonQuiz = (e) => {
    const { name } = e.target;
    setContentQuiz(name);
    setContentSewol(false);
    console.log(name);
  };

  const selectSewol = {
    first: <SewolVideo />,
    second: <SewolVideo />,
    third: <SewolVideo />,
    fourth: <SewolVideo />,
    fifth: <SewolVideo />,
  };

  const selectQuiz = {
    one: <Quiz1 />,
    two: <Quiz1 />,
    three: <Quiz1 />,
    four: <Quiz1 />,
    five: <Quiz1 />,
    six: <Quiz1 />,
    seven: <Quiz1 />,
    eight: <Quiz1 />,
    nine: <Quiz1 />,
    ten: <Quiz1 />,
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
        <div className="quizH1Box">
          <h1>퀴즈 풀어보기</h1>
        </div>
        <ul>
          {quizList.map((data) => (
            <button
              onClick={handleClickButtonQuiz}
              className="Btn"
              name={data.name}
              key={data.id}
            >
              {data.title}
            </button>
          ))}
        </ul>
      </div>
      {contentSewol && <div>{selectSewol[contentSewol]}</div>}
      {contentQuiz && <div>{selectQuiz[contentQuiz]}</div>}
    </div>
  );
};

export default NavBar;
