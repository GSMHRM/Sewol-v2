import React, { useRef } from "react";

const IconModal = ({ url, setModalOpen }) => {

  const toggleModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div>
        <a href={url} target="_blank">영상 보러가기</a>
      </div>
    </>
  );
};

export default IconModal;
