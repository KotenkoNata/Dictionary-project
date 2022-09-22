import React from "react";

export default function AudioPlay({audioUrl}) {
  const audio = new Audio(
    `${audioUrl}`
  );

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}