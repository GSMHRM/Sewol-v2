import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";

const SewolQuiz3 = () => {
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
      <div className="quizBox">
        <div className="quizInBox">
          <h1>세월호 최초 신고 시간은 언제인가요</h1>
          <p className="explain">(답을 선택해주세요)</p>
          <p className="quizlist">
          <p onClick={falseModal}>1. 8시 44분</p>
          <p onClick={trueModal}>2. 8시 52분</p>
          <p onClick={falseModal}>3, 9시 01분</p>
          </p>
        </div>
      </div>
      {trueOpen && <True text="정답입니다!" commentary="정부는 세월호 침몰 신고가 접수된 가장 빠른 시간이 8시52분이라고 공식적으로 밝혔다. " setTrueOpen={setTrueOpen}/>}
      {falseOpen && <False text="오답입니다!" commentary="다시 풀어보세요" setFalseOpen={setFalseOpen}/>}
    </div>
  );
};

export default SewolQuiz3;
