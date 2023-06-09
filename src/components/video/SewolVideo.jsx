import React from "react";
import Icons from "./icons/Icon";

const SewolVideo = () => {
  const URL = "https://www.youtube.com/watch?v=ALvTNrE_LbU&t=1s";
  return (
    <div>
      <Icons url={URL} />
      <iframe
        className="video"
        height="515"
        src="https://www.youtube.com/embed/ALvTNrE_LbU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      ></iframe>
    </div>
  );
};

export default SewolVideo;
