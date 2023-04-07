import React from "react";
import Icons from "./icons/Icon";

const Song1 = () => {
  const URL = `https://www.youtube.com/embed/Y5xSlNOlHL0`;
  return (
    <div>
      <Icons url={URL} />
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

export default Song1;
