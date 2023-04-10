import React, { useState } from "react";
import True from "../modal/True";
import False from "../modal/False";
import SafeQuiz5 from "./SafeQuiz5";
import SafeQuiz3 from "./SafeQuiz3";

const SafeQuiz4 = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };

  const [showQuiz, setShowQuiz] = useState(true);
  const [showQuiz2, setShowQuiz2] = useState(true);

  const handleClick = () => {
    setShowQuiz(false);
  };

  const handleClick2 = () => {
    setShowQuiz2(false);
  };
  return (
    <div>
      {showQuiz ? (
        showQuiz2 ? (
          <div>
            <div className="quizBox">
              <div className="quizInBox">
                <h1>문제 4</h1>
                <p className="quiz2">5개중 맞는 걸 고르시오</p>
                <p className="explain">(답을 선택해주세요)</p>
                <p className="quizlist11">
                  <p onClick={falseModal}>
                    1. 선박사고(화재, 테러 등) 발생시 물로 뛰어 내린다.
                  </p>
                  <p onClick={falseModal}>
                    2. 화재 발생시 우선 소화기를 이용하여 창문을 깨고 뛰어
                    내린다.
                  </p>
                  <p onClick={trueModal}>
                    3. 상황이 위험해졌을 때 의자 밑 또는 선실 내 보관된
                    구명조끼를 입고, 물속에서 행동이 쉽도록 가능한 한 신발을
                    벗는다.
                  </p>
                  <p onClick={falseModal}>
                    4. 선장, 인명구조요원의 지시에 따라 혼란스럽게 이동하며
                    가능한 실내에 있는다.
                  </p>
                  <p onClick={falseModal}>
                    5. 출입문 또는 비상구 등이 열리지 않을 때 아무것도 하지 말고
                    구조원을 기다린다.
                  </p>
                </p>
              </div>

              <button className="nextQuiz" onClick={handleClick}>
                다음 문제 {">"}
              </button>
              <button className="beforeQuiz" onClick={handleClick2}>
                {"<"} 이전 문제
              </button>
            </div>
            {trueOpen && (
              <True
                text="정답입니다!"
                seeCommentary=""
                commentary=""
                setTrueOpen={setTrueOpen}
              />
            )}
            {falseOpen && (
              <False
                text="오답입니다!"
                again="다시 풀어보세요"
                commentary="상황이 위험해졌을 때 의자 밑 또는 선실 내 보관된 구명조끼를
          입고, 물속에서 행동이 쉽도록 가능한 한 신발을 벗어야된다."
                setFalseOpen={setFalseOpen}
              />
            )}
          </div>
        ) : (
          <SafeQuiz3 />
        )
      ) : (
        <SafeQuiz5 />
      )}
    </div>
  );
};

export default SafeQuiz4;
