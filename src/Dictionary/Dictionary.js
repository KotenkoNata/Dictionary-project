import React, {useState} from 'react';
import axious from 'axios';
import Definition from './../Definition/Definition';
import './Dictionary.css';


const Dictionary = ({defaultKeyworld}) => {

  const [keyword, setKeyword] = useState(defaultKeyworld);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axious.get(apiUrl).then(handleResponse);
  }

  function updateKeywordChange(e) {
    setKeyword(e.target.value);
  }
  
  function load() {
    setLoaded(true);
    search();
  }

  if(loaded){
    return (
      <>
        <section className='section'>
          <form onSubmit={search} className="search-form">
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
      </>
    )
  }else{
    load();
    return "Loading";
  }

}

export default Dictionary;