import React from "react";
import Icons from "./icons/Icon";

const Song2 = () => {
  const URL = `https://www.youtube.com/watch?v=-iEv-rxGrzs`;
  return (
    <div>
      <Icons url={URL} />
      <iframe
        className="video"
        height="515"
        src="https://www.youtube.com/embed/-iEv-rxGrzs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
};

export default Song2;
