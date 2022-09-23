import React from 'react';
import AudioPlay from './AudioPlay';
import "./Phonetics.css";

const Phonetics = ({phonetics}) => {
  return (
    <ul className="phonetics-list">
      {phonetics.map((element, index) => {
        return(
          <li key={index}>
            <AudioPlay audioUrl={element.audio} />
            <p>{element.text}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Phonetics;