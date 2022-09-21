import React from 'react';
import Synonyms from "./../Synonyms/Synonyms";

 const MeaningItem = ({item}) => {
   return (
     <li>
        <h3>{item.partOfSpeech}</h3>
       {item.definitions.map((element, index)=>{
         return(
           <div key={index}>
             <p>
               <strong>Definition: </strong>
               {element.definition}</p>
             <br />
             <p>
               <strong>Example: </strong>
               {element.example}
             </p>
             <Synonyms synonyms={element.synonyms} />
           </div>
         )
       })}
     </li>
   )
 }

 export default MeaningItem;