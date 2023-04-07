import React from "react";
import "../../styles/video.css";
import Icons from "./icons/Icon";

const SafeVideo2 = () => {
  const URL = `https://www.youtube.com/embed/N9wSzbWX-Wg`
  return (
    <div>
      <Icons url={URL}/>
      <iframe
      className="video"
        width="960"
        height="515"
        src={URL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
};

export default SafeVideo2;
