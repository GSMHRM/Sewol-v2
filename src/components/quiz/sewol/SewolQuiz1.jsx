import React, { useRef, useState } from "react";
import "../../../styles/quiz.css";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";
import SewolQuiz2 from "./SewolQuiz2";

const SewolQuiz = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };

  const [showQuiz, setShowQuiz] = useState(true);

  const handleClick = () => {
    setShowQuiz(false);
  };

  return (
    <div>
      {showQuiz ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제 1</h1>
              <p className="quiz2">
                전쟁터에 있는 사람들의 무사귀환을 바라는 뜻으로 나무에 매달아
                두었던 것은?
              </p>
              <p className="explain">(답을 선택해주세요)</p>
              <p className="quizlist2">
                <p onClick={falseModal}>1. 빨간 리본</p>
                <p onClick={trueModal}>2. 노란 리본</p>
                <p onClick={falseModal}>3. 파란 리본</p>
              </p>
            </div>
            <button className="nextQuiz" onClick={handleClick}>
              다음 문제 {">"}
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
              commentary="전쟁터에 있는 사람들의 무사귀환을 바라는 뜻으로 나무에 매달아 두었던 것은 노란리본입니다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SewolQuiz2 />
      )}
    </div>
  );
};

export default SewolQuiz;
