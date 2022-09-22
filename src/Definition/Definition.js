import React from 'react';
import MeaningItem from './../MeaningItem/MeaningItem';
import Phonetics from './../Phonetics/Phonetics';

const Definition = ({definition}) => {

  if(definition){
    return (
      <>
        <h2>{definition.word}</h2>

        <Phonetics phonetics = {definition.phonetics}/>
        <ul>
        {definition.meanings.map((item, index)=>{
          return (<MeaningItem item={item} key={index}/>)
        })}
        </ul>
      </>
    )
  } else{
    return null;
  }
}

export default Definition;