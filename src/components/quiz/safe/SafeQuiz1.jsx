import React, { useState } from "react";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";
import SafeQuiz2 from "./SafeQuiz2";

const SafeQuiz1 = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };

  const [showQuiz2, setShowQuiz2] = useState(true);

  const handleClick = () => {
    setShowQuiz2(false);
  };
  return (
    <div>
      {showQuiz2 ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제1</h1>
              <p className="quiz1">
                선박연령 규제가 완화되면서 선박회사들은 중고선박을 구입 개조해
                사용하고 있다. 현재 완화된 규제에 따라 선박연령은 30년이다.
              </p>
              <FiCircle className="circle" onClick={trueModal} />
              <FiX className="x" onClick={falseModal} />
            </div>
            <button className="nextQuiz" onClick={handleClick}>
              다음 문제 {">"}
            </button>
          </div>
          {trueOpen && (
            <True
              text="정답입니다!"
              commentary="이명박 정부는 선박업계의 요구에 따라 선박연령을 20년에서 30년으로 완화했다."
              setTrueOpen={setTrueOpen}
            />
          )}
          {falseOpen && (
            <False
              text="오답입니다!"
              again="다시 풀어보세요"
              commentary="이명박 정부는 선박업계의 요구에 따라 선박연령을 20년에서 30년으로 완화했다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SafeQuiz2 />
      )}
    </div>
  );
};

export default SafeQuiz1;
