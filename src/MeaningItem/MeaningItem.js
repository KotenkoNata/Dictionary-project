import React from 'react';
 const MeaningItem = ({item}) => {
   return (
     <li>
        <h3>{item.partOfSpeech}</h3>
       {item.definitions.map((element, index)=>{
         return(
           <div key={index}>
             <p>{element.definition}</p>
             <br />
             <p>{element.example}</p>
           </div>
         )
       })}
     </li>
   )
 }

 export default MeaningItem;