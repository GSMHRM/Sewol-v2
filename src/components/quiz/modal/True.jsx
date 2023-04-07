import React, { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import "../../../styles/quiz.css";

const True = ({ text, commentary, setTrueOpen }) => {
  const trueModal = () => {
    setTrueOpen(false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setTrueOpen(false);
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
  }, [setTrueOpen]);

  return (
    <div ref={modalRef} className="modalBox">
      <p className="text">{text}</p>
      <p className="commentary">해설<br/> {commentary}</p>
      <FiX className="closeModal" onClick={trueModal} />
    </div>
  );
};

export default True;
