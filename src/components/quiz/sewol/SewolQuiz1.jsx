import React, { useState } from "react";
import "../../../styles/quiz.css";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";

const SewolQuiz = () => {
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
      <div className="quizBox">
        <div className="quizInBox">
          <h1>문제</h1>
          <p className="quiz">
            정홍원 국무총리에 따르면 세월호 매뉴얼에는 이곳에 상황을 보고하도록
            되어 있고,<br/> 사고 당일에도 선원이 직접 전화로 보고했다고 한다. 이곳은
            청와대다.
          </p>
          <FiCircle className="circle" onClick={falseModal} />
          <FiX className="x" onClick={trueModal} />
          <button>다음 문제 ={'>'}</button>
        </div>
      </div>
      {trueOpen && <True text="정답입니다!" commentary="청와대 -> 국정원" setTrueOpen={setTrueOpen}/>}
      {falseOpen && <False text="오답입니다!" again='다시 풀어보세요' commentary="청와대 -> 국정원" setFalseOpen={setFalseOpen}/>}
    </div>
  );
};

export default SewolQuiz;
