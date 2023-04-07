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
              몰루몰룸몰루
            </p>
            <FiCircle className="circle" onClick={falseModal} />
            <FiX className="x" onClick={trueModal} />
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary="몰루 -> 몰루"
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
