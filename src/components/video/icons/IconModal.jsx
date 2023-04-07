import React, { useRef } from "react";

const IconModal = ({ url, setModalOpen }) => {

    const toggleModal = ()=>{
        setModalOpen(false);
    }

    const modalRef = useRef(null);
  return (
    <>
      <div>
        {url}
      </div>
    </>
  );
};

export default IconModal;
