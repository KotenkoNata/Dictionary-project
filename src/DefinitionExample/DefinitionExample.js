import React from 'react';

const DefinitionExample = ({example}) => {
  if(example){
    return (
      <p className="example">
        <strong>Example - </strong>
        {example}
      </p>
    )
  }else{
    return null
  }
}

export default DefinitionExample;