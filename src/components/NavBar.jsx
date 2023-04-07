import React, { useState } from "react";
import "../styles/navbar.css";
import SewolVideo from "./video/SewolVideo";
import SafeVideo1 from "./video/SafeVideo1";
import SafeVideo2 from "./video/SafeVideo2";
import Song1 from "./video/Song1";
import Song2 from "./video/Song2";
import SewolQuiz1 from "./quiz/sewol/SewolQuiz1";
import SewolQuiz2 from "./quiz/sewol/SewolQuiz2";
import SewolQuiz3 from "./quiz/sewol/SewolQuiz3";
import SewolQuiz4 from "./quiz/sewol/SewolQuiz4";
import SewolQuiz5 from "./quiz/sewol/SewolQuiz5";
import SafeQuiz1 from "./quiz/safe/SafeQuiz1";
import SafeQuiz2 from "./quiz/safe/SafeQuiz2";
import SafeQuiz3 from "./quiz/safe/SafeQuiz3";
import SafeQuiz4 from "./quiz/safe/SafeQuiz4";
import SafeQuiz5 from "./quiz/safe/SafeQuiz5";
import { useEffect } from "react";
import { useRef } from "react";

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

  const btnRef = useRef(null);

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
    second: <SafeVideo1 />,
    third: <SafeVideo2 />,
    fourth: <Song1 />,
    fifth: <Song2 />,
  };

  const selectQuiz1 = {
    one: <SewolQuiz1 />,
    two: <SewolQuiz2 />,
    three: <SewolQuiz3 />,
    four: <SewolQuiz4 />,
    five: <SewolQuiz5 />,
  };

  const selectQuiz2 = {
    one: <SafeQuiz1 />,
    two: <SafeQuiz2 />,
    three: <SafeQuiz3 />,
    four: <SafeQuiz4 />,
    five: <SafeQuiz5 />,
  };

  useEffect(() => {
    setContentSewol("first");    
  }, []);

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
              ref={btnRef}
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
