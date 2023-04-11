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
import SewolBg from "../img/sewolBg.jpg";
import { useEffect } from "react";
import Think from "../components/quiz/sewol/Think";

const Home = () => {
  const sewolList = [
    { title: "세월호 영상", id: 1, name: "first" },
    { title: "너를 보내고", id: 2, name: "second" },
    { title: "천개의 바람이 되어", id: 3, name: "third" },
    { title: "안전 교육 영상1", id: 4, name: "fourth" },
    { title: "안전 교육 영상2", id: 5, name: "fifth" },
    { title: "세월호 관련 퀴즈 풀어보기", id: 6, name: "six" },
    { title: "안전 관련 퀴즈 풀어보기", id: 7, name: "seven" },
    { title: "생각해봅시다", id: 8, name: "eight" },
  ];

  const [contentSewol, setContentSewol] = useState();

  const [contentSewolQuiz, setContentSewolQuiz] = useState();

  const handleClickButtonSewol = (e) => {
    const { name } = e.target;
    setContentSewol(name);
    setContentSewolQuiz(false);
    setContentQuiz(false);
    setSafeIsActive(false);
    setSewolIsActive(false);
  };

  const selectSewol = {
    first: <SewolVideo />,
    second: <Song1 />,
    third: <Song2 />,
    fourth: <SafeVideo2 />,
    fifth: <SafeVideo1 />,
    six: <SewolQuiz1 />,
    seven: <SafeQuiz1 />,
    eight: <Think />,
  };

  useEffect(() => {
    setContentSewol("first");
  }, []);

  return (
    <div>
      <div className="navBar">
        <a href="http://gsm.gen.hs.kr/main/main.php" target="_blank">
          <img className="GSMLogo" src={GSM} alt="GSMLOGO" />
        </a>
        <div className="navBox">
          <div className="h1Box">
            <h1>세월호 참사를 기억하며</h1>
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
        <a
          className="page416"
          href="https://416foundation.org/?gclid=CjwKCAjw586hBhBrEiwAQYEnHUGWzL1Lfk2ae9yISYIAqXImKnOV9EHnF-oJ8mCgn5W2M_QoAS-yUhoCvAAQAvD_BwE"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <p>더 알아보고 싶다면?</p>
          <p className="underline416">(4.16재단)</p>
        </a>
        {contentSewol && <div>{selectSewol[contentSewol]}</div>}
      </div>
    </div>
  );
};

export default Home;
