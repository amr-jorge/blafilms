import React from 'react';
import Film from './Film';

const FilmsList = ({ films}) => { 
  return (
    
      <div className="search-results-list">
        {films.map((film, index) => (
          <Film key={`${film.imdbID}${index}`}  film={film} />
        ))}
      </div>
    
  )
}

export default FilmsList;