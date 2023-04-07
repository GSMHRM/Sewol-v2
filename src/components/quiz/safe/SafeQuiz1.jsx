import React from "react";
import { FiCircle, FiX } from "react-icons/fi";

const SafeQuiz1 = () => {
  return (
    <div>
      <div>
        <div className="quizBox">
          <div className="quizInBox">
            <h1>문제</h1>
            <p className="quiz">
              선박연령 규제가 완화되면서 선박회사들은 중고선박을 구입
              <br /> 개조해 사용하고 있다. 현재 완화된 규제에 따라 선박연령은
              30년이다.
            </p>
            <FiCircle className="circle" />
            <FiX className="x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeQuiz1;
