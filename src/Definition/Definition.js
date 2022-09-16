import React from 'react';
import MeaningItem from './../MeaningItem/MeaningItem';

const Definition = ({definition}) => {

  if(definition){
    return (
      <>
        <h2>{definition.word}</h2>
        <ul>
        {definition.meanings.map((item, index)=>{
          console.log(item);
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