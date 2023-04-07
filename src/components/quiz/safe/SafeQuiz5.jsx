import React from "react";
import { FiCircle, FiX } from "react-icons/fi";

const SafeQuiz5 = () => {
  return (
    <div>
      <div>
        <div className="quizBox">
          <div className="quizInBox">
            <h1>문제</h1>
            <p className="quiz">
              배가 기울어질때 선장이나 선원의 안내로 방 안에 그대로 머물러있는다.
            </p>
            <FiCircle className="circle" />
            <FiX className="x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeQuiz5;
