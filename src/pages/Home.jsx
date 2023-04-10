import React, { useState } from "react";
import "../styles/home.css";
import SewolVideo from "../components/video/SewolVideo";
import SafeVideo1 from "../components/video/SafeVideo1";
import SafeVideo2 from "../components/video/SafeVideo2";
import Song1 from "../components/video/Song1";
import Song2 from "../components/video/Song2";
import SewolQuiz1 from "../components/quiz/sewol/SewolQuiz1";
import SafeQuiz1 from "../components/quiz/safe/SafeQuiz1";
import GSM from "./../img/GSM.png";
import { useEffect } from "react";
import { useRef } from "react";

const Home = () => {
  const sewolList = [
    { title: "세월호 영상", id: 1, name: "first" },
    { title: "천개의 바람이 되어", id: 2, name: "second" },
    { title: "너를 보내고", id: 3, name: "third" },
    { title: "안전 교육 영상1", id: 4, name: "fourth" },
    { title: "안전 교육 영상2", id: 5, name: "fifth" },
  ];

  const [contentSewol, setContentSewol] = useState();

  const [contentSewolQuiz, setContentSewolQuiz] = useState();

  const [contentSafeQuiz, setContentSafeQuiz] = useState();

  const btnRef = useRef([]);

  const handleClickButtonSewol = (e) => {
    const { name } = e.target;
    setContentSewol(name);
    setContentSewolQuiz(false);
    setContentSafeQuiz(false);
  };

  const handleClickButtonSewolQuiz = (e) => {
    const { name } = e.target;
    setContentSewolQuiz(name);
    setContentSewol(false);
    setContentSafeQuiz(false);
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
    second: <Song2 />,
    third: <Song1 />,
    fourth: <SafeVideo1 />,
    fifth: <SafeVideo2 />,
  };

  const selectQuiz1 = {
    one: <SewolQuiz1 />,
  };

  const selectQuiz2 = {
    one: <SafeQuiz1 />,
  };

  useEffect(() => {
    setContentSewol("first");
  }, []);

  return (
    <div className="navBar">
      <a href="http://gsm.gen.hs.kr/main/main.php" target="_blank">
        <img className="GSMLogo" src={GSM} alt="GSMLOGO" />
      </a>
      <div className="navBox">
        <div className="h1Box">
          <h1>세월호 추모영상(1시간 창체)</h1>
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
      <button
        className="sewolQuiz"
        onClick={handleClickButtonSewolQuiz}
        name="one"
        ref={btnRef}
      >
        세월호 관련 퀴즈 풀어보기
      </button>
      <button
        className="safeQuiz"
        onClick={handleClickButtonSafeQuiz}
        name="one"
        ref={btnRef}
      >
        안전 관련 퀴즈 풀어보기
      </button>
      <a
      className="page416"
        href="https://416foundation.org/?gclid=CjwKCAjw586hBhBrEiwAQYEnHUGWzL1Lfk2ae9yISYIAqXImKnOV9EHnF-oJ8mCgn5W2M_QoAS-yUhoCvAAQAvD_BwE"
        target="_blank"
      >
        더 알아보고 싶다면?
      </a>

      {contentSewol && <div>{selectSewol[contentSewol]}</div>}
      {contentSewolQuiz && <div>{selectQuiz1[contentSewolQuiz]}</div>}
      {contentSafeQuiz && <div>{selectQuiz2[contentSafeQuiz]}</div>}
    </div>
  );
};

export default Home;
