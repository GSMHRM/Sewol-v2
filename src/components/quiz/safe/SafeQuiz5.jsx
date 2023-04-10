import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";
import SafeQuiz4 from "./SafeQuiz4";

const SafeQuiz5 = () => {
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
              <h1>문제5</h1>
              <p className="quiz2">다음은 무엇을 설명한 것일까요?</p>
              <p className="explain">(답을 선택해주세요)</p>
              <p className="quizContent">
                배나 건물 등에서 침수로 인해 공기가 남아 있는 부분을 말합니다.
                이 공기가 선실 내 일부 또는 지하주차장 일부 공간에 남아 있는
                현상입니다. 배가 뒤집혔을 때 선체 내부에 빠져나가지 못한 공기
                방울을 일컫는 말이기도 합니다.
              </p>
              <p className="quizlist10">
                <p onClick={trueModal}>1. 에어포켓</p>
                <p onClick={falseModal}>2. 이안류</p>
              </p>
            </div>
            <button className="beforeQuiz" onClick={handleClick}>
              {"<"} 이전 문제
            </button>
          </div>
          {trueOpen && (
            <True
              text="정답입니다!"
              commentary="이안류는 해안에서 바다로 흐르는 해류를 말합니다. 이안류는 보통 수십 미터에서 수백 미터까지 이어지며 유속은 최대 10km/h에 이르기도 합니다. 일반인의 수영 속도보다 훨씬 빠르기 때문에 절대로 이안류를 거슬러 헤엄쳐서 돌아오려고 하면 안 됩니다."
              setTrueOpen={setTrueOpen}
            />
          )}
          {falseOpen && (
            <False
              text="오답입니다!"
              again="다시 풀어보세요"
              commentary="이안류는 해안에서 바다로 흐르는 해류를 말합니다. 이안류는 보통 수십 미터에서 수백 미터까지 이어지며 유속은 최대 10km/h에 이르기도 합니다. 일반인의 수영 속도보다 훨씬 빠르기 때문에 절대로 이안류를 거슬러 헤엄쳐서 돌아오려고 하면 안 됩니다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SafeQuiz4 />
      )}
    </div>
  );
};

export default SafeQuiz5;
