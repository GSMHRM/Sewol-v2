import React, { useState } from "react";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";

const SafeQuiz1 = () => {

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
              선박연령 규제가 완화되면서 선박회사들은 중고선박을 구입
              <br /> 개조해 사용하고 있다. 현재 완화된 규제에 따라 선박연령은
              30년이다.
            </p>
            <FiCircle className="circle" onClick={}/>
            <FiX className="x" />
          </div>
        </div>
      </div>
      {trueOpen && <True text="정답입니다!" commentary="청와대 -> 국정원" setTrueOpen={setTrueOpen}/>}
      {falseOpen && <False text="오답입니다!" again='다시 풀어보세요' commentary="청와대 -> 국정원" setFalseOpen={setFalseOpen}/>}
    </div>
  );
};

export default SafeQuiz1;
