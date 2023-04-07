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
              특별법 제정을 위해 연예인을 비롯해 많은 국민이 동조단식을 하고
              있다.<br/> 연예인 김제동씨도 23일 간 동조단식을 했다.
            </p>
            <FiCircle className="circle" onClick={falseModal} />
            <FiX className="x" onClick={trueModal} />
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary="김제동 -> 김장훈"
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

export default SewolQuiz2;
