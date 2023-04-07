import React, { useState } from "react";
import { FcAbout } from "react-icons/fc";
import IconModal from "./IconModal";
import "../../../styles/video.css";

const Icons = ({ url }) => {
  const [modalopen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="iconBox">
        <FcAbout className="icons" onClick={toggleModal} />
      </div>
      {modalopen && <IconModal url={url} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Icons;
