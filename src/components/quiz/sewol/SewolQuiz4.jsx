import React, { useState } from "react";
import "../../../styles/quiz.css";
import True from "../modal/True";
import False from "../modal/False";
import SewolQuiz5 from "./SewolQuiz5";
import SewolQuiz3 from "./SewolQuiz3";

const SewolQuiz4 = () => {
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
  };

  return (
    <div>
      {showQuiz ? showQuiz2 ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제 4</h1>
              <div className="quiz2">세월호의 인양일은 언제인가요?</div>
              <p className="explain">(답을 선택해주세요)</p>
              <p className="quizlist">
                <p onClick={falseModal}>1. 2015년 3월 23일</p>
                <p onClick={falseModal}>2. 2016년 3월 23일</p>
                <p onClick={trueModal}>3, 2017년 3월 23일</p>
              </p>
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
              commentary="2017년 3월23일 세월호는 1073일 만에 인양되었다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SewolQuiz3 />
      ) : <SewolQuiz5 />}
    </div>
  );
};

export default SewolQuiz4;
