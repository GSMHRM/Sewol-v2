import React, { useState } from "react";
import "../../../styles/quiz.css";
import True from "../modal/True";
import False from "../modal/False";
import SewolQuiz4 from "./SewolQuiz4";

const SewolQuiz5 = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };

  const handleClick = () => {
    setShowQuiz(false);
  };

  return (
    <div>
      {showQuiz ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제 5</h1>
              <p className="quiz2">세월호 참사 이후 대한민국 정부가 시행한 것은 무엇일까요?</p>
              <p className="explain">(답을 선택해주세요)</p>
              <p className="quizlist3">
                <p onClick={falseModal}>1. 유엔인권이행위원회 조사 요청 수용</p>
                <p onClick={falseModal}>2. 신한국형 경제 구상 발표</p>
                <p onClick={trueModal}>3. 해상안전법 개정</p>
                <p onClick={falseModal}>4. 국가합동수사단 설치</p>
              </p>
            </div>
            <button className="beforeQuiz" onClick={handleClick}>
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
          again='다시 풀어보세요'
          commentary="정부는 세월호 참사 이후 해상안전법을 개정하였다."
          setFalseOpen={setFalseOpen}
        />
      )}
      </div>
      ) : (<SewolQuiz4 />)}
    </div>
  );
};

export default SewolQuiz5;
