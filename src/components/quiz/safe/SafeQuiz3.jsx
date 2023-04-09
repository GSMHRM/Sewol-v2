import { FiCircle, FiX } from "react-icons/fi";
import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";
import SafeQuiz4 from "./SafeQuiz4";
import SafeQuiz2 from "./SafeQuiz2";

const SafeQuiz3 = () => {
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
      {showQuiz ? (
        showQuiz2 ? (
          <div>
            <div className="quizBox">
              <div className="quizInBox">
                <h1>문제3</h1>
                <p className="quiz1">
                  선박사고(화재, 테러 등) 발생시 큰소리로 외치거나 비상벨을 눌러
                  사고발생 사실을 알린다.
                </p>
                <FiCircle className="circle" onClick={trueModal} />
                <FiX className="x" onClick={falseModal} />
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
                commentary="선박사고(화재, 테러 등) 발생시 큰소리로 외치거나 비상벨을 눌러
          사고발생 사실을 알려야된다."
                setTrueOpen={setTrueOpen}
              />
            )}
            {falseOpen && (
              <False
                text="오답입니다!"
                again="다시 풀어보세요"
                commentary="선박사고(화재, 테러 등) 발생시 큰소리로 외치거나 비상벨을 눌러
          사고발생 사실을 알려야된다."
                setFalseOpen={setFalseOpen}
              />
            )}
          </div>
        ) : (
          <SafeQuiz2 />
        )
      ) : (
        <SafeQuiz4 />
      )}
    </div>
  );
};

export default SafeQuiz3;
