import React from "react";
import "../../styles/video.css";
import Icons from "./icons/Icon";

const SafeVideo2 = () => {
  const URL = `https://www.youtube.com/watch?v=N9wSzbWX-Wg`
  return (
    <div>
      <Icons url={URL}/>
      <iframe
      className="video"
        height="515"
        src="https://www.youtube.com/embed/N9wSzbWX-Wg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
};

export default SafeVideo2;
