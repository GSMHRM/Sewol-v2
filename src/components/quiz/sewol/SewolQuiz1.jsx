import React, { useRef, useState } from "react";
import "../../../styles/quiz.css";
import { FiCircle, FiX } from "react-icons/fi";
import True from "../modal/True";
import False from "../modal/False";
import SewolQuiz2 from "./SewolQuiz2";

const SewolQuiz = () => {
  const [trueOpen, setTrueOpen] = useState(false);
  const [falseOpen, setFalseOpen] = useState(false);

  const trueModal = () => {
    setTrueOpen(true);
  };

  const falseModal = () => {
    setFalseOpen(true);
  };

  const [showQuiz2, setShowQuiz2] = useState(true);

  const handleClick = () => {
    setShowQuiz2(false);
  };

  return (
    <div>
      {showQuiz2 ? (
        <div>
          <div className="quizBox">
            <div className="quizInBox">
              <h1>문제1</h1>
              <p className="quiz1">
                다음은 세월호 참사를 다른 영화 내용이다. 영화의 제목은
                무엇일까요?
              </p>
              <p className="explain">(답을 선택해주세요)</p>
              <p className="quizContent">
                김지영 감독, 김어준 제작의 다큐멘터리 영화로 20억 3천만원의 시민
                후원을 통해 3년간 제작되었다. 2018년 4월 12일 개봉되어 54만명이
                관람하였다. 세월호 항적 분석, 생존자 진술, 적재 차량 CCTV
                분석자료 등의 교차검증되는 사실을 근거로 가설을 제시하였다. 해당
                영화가 주장한 'AIS(선박자동식별시스템) 조작 의혹'을 유가족이
                검찰 세월호참사특별수사단에 수사의뢰하여 국내 23개의 AIS 기지국
                및 해외 AIS 수집업체, 민간 선박의 AIS 데이터 등을 분석하였다.
              </p>
              <p className="quizlist10">
                <p onClick={trueModal}>1. 그날, 바다</p>
                <p onClick={falseModal}>2. 다이빙벨</p>
              </p>
            </div>
            <button className="nextQuiz" onClick={handleClick}>
              다음 문제 {">"}
            </button>
          </div>
          {trueOpen && (
            <True
              text="정답입니다!"
              commentary="《다이빙벨》은 세월호 침몰 사고에 다이빙벨을 투입하는 과정을 다룬 다큐멘터리 영화이다. 이상호와 안해룡이 감독했다. 다이빙벨'은 2014년 4월 16일 여객선 세월호가 침몰한 이후 보름 간 승객 구조 방식을 두고 벌어졌던 대립의 상황을 담았다. 세월호 참사 당시 구조작업이 교착상태에 빠지자 알파잠수기술공사 대표 이종인이 대안으로 제시한 '다이빙벨'의 투입에 대해 구조당국이 투입에 미온적 또는 투입 자체를 방해하여 제대로 구조활동을 펼칠 수 없었다는 내용을 다루고 있다."
              setTrueOpen={setTrueOpen}
            />
          )}
          {falseOpen && (
            <False
              text="오답입니다!"
              again="다시 풀어보세요"
              commentary="《다이빙벨》은 세월호 침몰 사고에 다이빙벨을 투입하는 과정을 다룬 다큐멘터리 영화이다. 이상호와 안해룡이 감독했다. 다이빙벨'은 2014년 4월 16일 여객선 세월호가 침몰한 이후 보름 간 승객 구조 방식을 두고 벌어졌던 대립의 상황을 담았다. 세월호 참사 당시 구조작업이 교착상태에 빠지자 알파잠수기술공사 대표 이종인이 대안으로 제시한 '다이빙벨'의 투입에 대해 구조당국이 투입에 미온적 또는 투입 자체를 방해하여 제대로 구조활동을 펼칠 수 없었다는 내용을 다루고 있다."
              setFalseOpen={setFalseOpen}
            />
          )}
        </div>
      ) : (
        <SewolQuiz2 />
      )}
    </div>
  );
};

export default SewolQuiz;
