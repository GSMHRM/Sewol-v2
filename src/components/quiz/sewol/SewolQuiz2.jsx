import React, { useState } from "react";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";

const SewolQuiz2 = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };
  return (
    <div>
      <div>
        <div className="quizBox">
          <div className="quizInBox">
            <h1>문제</h1>
            <p className="quiz">
              세월호의 희생자 수는 299명이다.
            </p>
            <FiCircle className="circle" onClick={falseModal} />
            <FiX className="x" onClick={trueModal} />
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary="시신 미수습자 5명을 포함한 304명이 사망하였다."
          setTrueOpen={setTrueOpen}
        />
      )}
      {falseOpen && (
        <False
          text="오답입니다!"
          again='다시 풀어보세요'
          commentary="시신 미수습자 5명을 포함한 304명이 사망하였다."
          setFalseOpen={setFalseOpen}
        />
      )}
    </div>
  );
};

export default SewolQuiz2;
