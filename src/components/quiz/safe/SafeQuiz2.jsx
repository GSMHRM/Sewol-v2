import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";

const SafeQuiz2 = () => {
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
            <p className="explain">(답을 선택해주세요)</p>
            <p className="quizg">
              해수면 또는 내수면에서 선박 등의 침몰·좌초·전복·충돌·화재·기관고장
              및 추락 등으로 인하여 사람의 생명·신체 및 선박 등의 안전이 위험에
              처한 상태를 말합니다.
            </p>
            <p className="quizlist2">
              <p onClick={trueModal}>1. 조난사고</p>
              <p onClick={falseModal}>2. 교통사고</p>
              <p onClick={falseModal}>3. 침몰사고</p>
            </p>
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary="없음"
          setTrueOpen={setTrueOpen}
        />
      )}
      {falseOpen && (
        <False
          text="오답입니다!"
          again="다시 풀어보세요"
          commentary="없음"
          setFalseOpen={setFalseOpen}
        />
      )}
    </div>
  );
};

export default SafeQuiz2;
