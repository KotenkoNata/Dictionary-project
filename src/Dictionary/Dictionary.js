import React, {useState} from 'react';
import './Dictionary.css';

const Dictionary = () => {

  const [keyword, setKeyword] = useState('');

  function search(e) {
    e.preventDefault();
    alert(`Searching for ${keyword}`)
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