import React from "react";
import { FiCircle, FiX } from "react-icons/fi";

const SewolQuiz2 = () => {
  return (
    <div>
      <div>
        <div className="quizBox">
          <div className="quizInBox">
            <h1>문제</h1>
            <p className="quiz">
              세월호 특별법 가족국민입법발의안은 총 49조로 되어 있다.
            </p>
            <FiCircle className="circle" />
            <FiX className="x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SewolQuiz2;
