import React, { useState } from 'react';
import Error from './Error';

const Searcher = ({ setSearch }) => {

  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);

  const searchFilms = e => {
    e.preventDefault();

    // validate
    if (term.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    // send term of search to main component
    setSearch(term);
  }
  
  return (
    // use form to submit on key press enter
    <form >
      <div className="search">
        <input
          type="text"
          placeholder="Search a film, example: The Godfather or Matrix..."
          onChange={ e => setTerm(e.target.value) }
        />        

        <button
          onClick={searchFilms}
          >
          Search
        </button>        
      </div>

      { error ? <Error message="type a search term" /> : null }

    </form>    
  )
}

export default Searcher