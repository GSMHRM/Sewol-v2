import React from "react";
import Icons from "./icons/Icon";

const SewolVideo = () => {
  const URL = `https://www.youtube.com/watch?v=ALvTNrE_LbU&t=4s`;
  return (
    <div>
      <Icons url={URL} />
      <iframe
      className="video"
        width="960"
        height="515"
        src={URL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
};

export default SewolVideo;
