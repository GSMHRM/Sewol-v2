import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { useEffect, useRef } from "react";
import "../../../styles/quiz.css";

const False = ({ text, commentary, setFalseOpen, again }) => {
  const falseModal = () => {
    setFalseOpen(false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setFalseOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  }, [setFalseOpen]);

  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div ref={modalRef} className="modalBox">
      <p className="text">{text}</p>
      <p className="again">({again})</p>
      <button className="commentaryOpen" onClick={handleClick}>해설보기</button>
      <span className="closeModal" onClick={falseModal}>
        <FiX />
      </span>
      {isOpen && (<div className="commentary">{commentary}</div>)}
    </div>
  );
};

export default False;
