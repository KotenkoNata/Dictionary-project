import React from 'react';
import DefinitionExample from './../DefinitionExample/DefinitionExample';

 const MeaningItem = ({item, word}) => {

   function capitalizeFirstLetter(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
   }

   return (
     <li className="definition-item">
        <h3 className="definition-title">{capitalizeFirstLetter(item.partOfSpeech)}</h3>
        <h4 className="definition-world">{word}</h4>
       <div className="definition-item-container">
       {item.definitions.map((element, index)=>{
         return(
           <div key={index} className="definition-item">
             <p>
               <strong>{`${index+1}. `}</strong>
               {element.definition}</p>
             <DefinitionExample example={element.example}/>
           </div>
         )
       })}
       </div>
     </li>
   )
 }

 export default MeaningItem;