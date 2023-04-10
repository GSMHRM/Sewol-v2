import React, { useState } from "react";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";
import SewolQuiz3 from "./SewolQuiz3";
import SewolQuiz1 from "./SewolQuiz1";

const SewolQuiz2 = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };

  const [showQuiz, setShowQuiz] = useState(true);
  const [showQuiz2, setShowQuiz2] = useState(true);

  const handleClick = () => {
    setShowQuiz(false);
  };

  const handleClick2 = () => {
    setShowQuiz2(false);
  }
  return (
    <div>
      {showQuiz ? showQuiz2 ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제 2</h1>
              <p className="quiz2">세월호의 희생자 수는 299명이다.</p>
              <FiCircle className="circle" onClick={falseModal} />
              <FiX className="x" onClick={trueModal} />
            </div>
            <button className="nextQuiz" onClick={handleClick}>
              다음 문제 {">"}
            </button>
            <button className="beforeQuiz" onClick={handleClick2}>
              {"<"} 이전 문제
            </button>
          </div>
          {trueOpen && (
            <True
              text="정답입니다!"
              seeCommentary=""
              commentary=""
              setTrueOpen={setTrueOpen}
            />
          )}
          {falseOpen && (
            <False
              text="오답입니다!"
              again="다시 풀어보세요"
              commentary="시신 미수습자 5명을 포함한 304명이 사망하였다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SewolQuiz1 />
      ) : <SewolQuiz3 />}
    </div>
  );
};

export default SewolQuiz2;
