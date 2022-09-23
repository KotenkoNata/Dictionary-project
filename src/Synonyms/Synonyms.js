import React from 'react';
import './Synonyms.css';

const Synonyms = ({synonyms}) => {
  if(synonyms.length){
    return (
      <>
        <h4 className="synonyms-title">Synonyms: </h4>
        <p className="synonyms-list">{synonyms.join(', ')}</p>
      </>
    )
  }else{
    return null
  }
}

export default Synonyms;