import React from 'react';
import AudioPlay from './AudioPlay';

const Phonetics = ({phonetics}) => {
  return (
    <ul>
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