import React from 'react';
import placeholderImg from '../assets/placeholder.png';

const Film = ({ film }) => {
  // extract the fields
  const { imdbID, Poster, Title, Type, Year } = film;
  return (
    <div className="search-item">
      <img src={Poster === 'N/A' ? placeholderImg : Poster} title={Title} alt={Title} />
      <div className="search-item-data">
        <div className="title">{Title}</div>
        <div className="meta">{`${Type} | ${Year}`}</div>
      </div>
      <div>
        <a className="link-view" href={Poster} target="_blank" rel="noopener noreferrer">See cover</a>
      </div>
    </div>
  )
}

export default Film