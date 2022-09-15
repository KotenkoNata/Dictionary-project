import React, {useState} from 'react';
import axious from 'axios';
import './Dictionary.css';


const Dictionary = () => {

  const [keyword, setKeyword] = useState('');

  function handleResponse(response) {
    console.log(response.data[0])
  }

  function search(e) {
    e.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axious.get(apiUrl).then(handleResponse);
  }

  function updateKeywordChange(e) {
    setKeyword(e.target.value);
  }



return (
  <>
    <form onSubmit={search}>
        <input type="search" onChange={updateKeywordChange}/>
    </form>
  </>
)
}

export default Dictionary;