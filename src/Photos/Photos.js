import React from 'react';
import "./Photos.css";

const Photos = ({photos}) => {
  if(photos){
    return(
      <section className='section wrapper'>
        {photos.photos.map((photo, index)=>{
          return (
            <div className="cell" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} className="photo-image" alt={photo.alt}/>
              </a>
            </div>
          )
        })}
      </section>
    )
  }else{
    return null;
  }
}

export default Photos;