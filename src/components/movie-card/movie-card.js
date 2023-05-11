import React from 'react';

const MovieCard = ({ movie, onOpenPopup }) => {
  const { Title, Year, Poster, Rating } = movie;

  return (
    <div className="movie" onClick={onOpenPopup}>
      <img className="movie-image" src={Poster} alt={Title} />
      <div className="movie-info">
        <h2 className="movie-title">{Title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
