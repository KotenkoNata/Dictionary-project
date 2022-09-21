import React from 'react';

const Synonyms = (props) => {
  console.log(`props.synonyms`,props.synonyms)
  if(props.synonyms){
    return (
      <ul>
        {props.synonyms.map((item, index)=>{
          return (
            <li key={index}>
              <strong>Synonyms: </strong>
              {item}</li>
          )
        })}
      </ul>

    )
  }else{
    return null
  }
}

export default Synonyms;