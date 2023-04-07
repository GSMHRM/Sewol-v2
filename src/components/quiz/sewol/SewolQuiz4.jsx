import React, { useState } from "react";
import "../../../styles/quiz.css";
import True from "../modal/True";
import False from "../modal/False";

const SewolQuiz4 = () => {
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
            <h1>세월호의 인양일은 언제인가요?</h1>
            <p className="explain">(답을 선택해주세요)</p>
            <p className="quizlist">
              <p onClick={falseModal}>1. 2017년 3월 15일</p>
              <p onClick={falseModal}>2. 2017년 3월 18일</p>
              <p onClick={trueModal}>3, 2017년 3월 23일</p>
            </p>
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary="3월23일 세월호는 1073일 만에 인양되었다. "
          setTrueOpen={setTrueOpen}
        />
      )}
      {falseOpen && (
        <False
          text="오답입니다!"
          commentary="다시 풀어보세요"
          setFalseOpen={setFalseOpen}
        />
      )}
    </div>
  );
};

export default SewolQuiz4;
