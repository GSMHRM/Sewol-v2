import { FiCircle, FiX } from "react-icons/fi";
import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";

const SafeQuiz3 = () => {
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
              선박사고(화재, 테러 등) 발생시 큰소리로 외치거나 비상벨을 눌러
              사고발생 사실을 알린다.
            </p>
            <FiCircle className="circle" onClick={trueModal}/>
            <FiX className="x" onClick={falseModal}/>
          </div>
        </div>
      </div>
      {trueOpen && (
        <True
          text="정답입니다!"
          commentary='선박사고(화재, 테러 등) 발생시 큰소리로 외치거나 비상벨을 눌러
          사고발생 사실을 알려야된다.'
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
  );
};

export default SafeQuiz3;
