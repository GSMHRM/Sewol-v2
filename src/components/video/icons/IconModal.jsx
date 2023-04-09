import React, { useEffect, useRef } from "react";

const IconModal = ({ url, setModalOpen }) => {

  const toggleModal = () => {
    setModalOpen(false);
  }

  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
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
  }, [setModalOpen]);

  return (
    <>
      <div ref={modalRef}>
        <div className="linkBox">
        <a href={url} className="showVideo" target="_blank">유튜브에서 영상보기</a>
        </div>
      </div>
    </>
  );
};

export default IconModal;
