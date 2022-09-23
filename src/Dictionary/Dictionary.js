import React, {useState} from 'react';
import axious from 'axios';
import Definition from './../Definition/Definition';
import Photos from './../Photos/Photos';
import './Dictionary.css';


const Dictionary = ({defaultKeyworld}) => {

  const [keyword, setKeyword] = useState(defaultKeyworld);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axious.get(apiUrl).then(handleResponse);

    const key = process.env.REACT_APP_PEXELS_API;
    const imageUrl = `https://api.pexels.com/v1/search?per_page=9&query=${keyword}`;
    axious.get(imageUrl, {headers: {"Authorization": `${key}`}}).then(handlePexelsResponse);
  }

  function updateKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function load(e) {
    setLoaded(true);
    search();
  }

  if(loaded){
    return (
      <>
        <section className='section'>
          <form onSubmit={handleSubmit} className="search-form">
            <div className='search-container'>
              <input className="search-form-input" type="search" onChange={updateKeywordChange} placeholder="Enter the world to search for"/>
              <button className="search-button" onSubmit={search}>
                <svg className="icon-play" width="25" height="25">
                  <use href="./symbol-defs.svg#icon-search"></use>
                </svg>
              </button>
            </div>
          </form>
        </section>
        <Definition definition={definition}/>
        <Photos photos={photos}/>
      </>
    )
  }else{
    load();
    return "Loading";
  }

}

export default Dictionary;