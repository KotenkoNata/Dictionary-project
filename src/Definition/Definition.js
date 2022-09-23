import React from 'react';
import MeaningItem from './../MeaningItem/MeaningItem';
import AudioPlay from './../Phonetics/AudioPlay';
import Synonyms from "./../Synonyms/Synonyms";
import "./Definition.css";

const Definition = ({definition}) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  if(definition){
    return (
      <>
        <div className='searching-word-container'>
          <AudioPlay audioUrl={definition.phonetics[0].audio}/>
          <h2 className="searching-word">{capitalizeFirstLetter(definition.word)}</h2>
          <p>{definition.phonetics[0].text}</p>
        </div>
        <ul className="definition-list">
        {definition.meanings.map((item, index)=>{
          return (
            <section className="section" key={index}>
            <MeaningItem item={item} word={definition.word}/>
            <Synonyms synonyms={item.synonyms}/>
            </section>
          )
        })}
        </ul>

      </>
    )
  } else{
    return null;
  }
}

export default Definition;