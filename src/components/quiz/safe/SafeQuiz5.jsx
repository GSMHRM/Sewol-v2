import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";
import { FiCircle, FiX } from "react-icons/fi";

const SafeQuiz5 = () => {
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
            <h1>문제5</h1>
            <p className="quiz1">
              배가 기울어질때 선장이나 선원의 안내로 방 안에 그대로
              머물러있는다.
            </p>
            <FiCircle className="circle" onClick={falseModal}/>
            <FiX className="x" onClick={trueModal}/>
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary="방안에 그대로 머물러 있는게 아닌 지시에 따른다."
          setTrueOpen={setTrueOpen}
        />
      )}
      {falseOpen && (
        <False
          text="오답입니다!"
          again="다시 풀어보세요"
          commentary="방안에 그대로 머물러 있는게 아닌 지시에 따른다."
          setFalseOpen={setFalseOpen}
        />
      )}
    </div>
  );
};

export default SafeQuiz5;
