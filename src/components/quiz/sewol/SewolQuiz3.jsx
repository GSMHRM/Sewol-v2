import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";
import SewolQuiz4 from "./SewolQuiz4";
import SewolQuiz2 from "./SewolQuiz2";

const SewolQuiz3 = () => {
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
    setShowQuiz2(false)
  };

  return (
    <div>
      {showQuiz ? showQuiz2 ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제3</h1>
              <p className="quiz2">세월호 최초 신고 시간은 언제인가요</p>
              <p className="explain">(답을 선택해주세요)</p>
              <p className="quizlist">
                <p onClick={falseModal}>1. 8시 44분</p>
                <p onClick={trueModal}>2. 8시 52분</p>
                <p onClick={falseModal}>3. 9시 01분</p>
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
              commentary="정부는 세월호 침몰 신고가 접수된 가장 빠른 시간이 8시52분이라고 공식적으로 밝혔다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SewolQuiz2 />
      ) : <SewolQuiz4 />}
    </div>
  );
};

export default SewolQuiz3;
