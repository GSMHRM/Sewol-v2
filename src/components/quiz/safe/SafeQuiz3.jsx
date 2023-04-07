import React from "react";
import { FiCircle, FiX } from "react-icons/fi";

const SafeQuiz3 = () => {
  return (
    <div>
      <div>
        <div className="quizBox">
          <div className="quizInBox">
            <h1>문제</h1>
            <p className="quiz">
              선박사고(화재, 테러 등) 발생시 큰소리로 외치거나 비상벨을 눌러
              사고발생 사실을 알린다.
            </p>
            <FiCircle className="circle" />
            <FiX className="x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeQuiz3;
