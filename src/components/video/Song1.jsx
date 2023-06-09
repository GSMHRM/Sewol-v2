import React from "react";
import Icons from "./icons/Icon";

const Song1 = () => {
  const URL = `https://www.youtube.com/watch?v=Y5xSlNOlHL0`;
  return (
    <div>
      <Icons url={URL} />
      <iframe
        className="video"
        height="515"
        src="https://www.youtube.com/embed/Y5xSlNOlHL0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
};

export default Song1;
