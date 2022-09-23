import React from "react";
import './Phonetics.css';

export default function AudioPlay({audioUrl}) {
  const audio = new Audio(
    `${audioUrl}`
  );

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start} className="audio-button">
        <svg className="icon-listen" width="35" height="35">
          <use href="./symbol-defs.svg#icon-play"></use>
        </svg>
      </button>
    </div>
  );
}