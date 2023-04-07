import React from "react";
import "../../../styles/quiz.css";
import { FiCircle, FiX } from "react-icons/fi";

const SewolQuiz = () => {
  return (
    <div>
      <div className="quizBox">
        <div className="quizInBox">
        <h1>문제</h1>
        <p className="quiz">
          정홍원 국무총리에 따르면 세월호 매뉴얼에는 이곳에 상황을 보고하도록
          되어 있고, 사고 당일에도 선원이 직접 전화로 보고했다고 한다. 이곳은
          청와대다.
        </p>
        <FiCircle className="circle"/>
        <FiX className="x"/>
      </div>
      </div>
    </div>
  );
};

export default SewolQuiz;
