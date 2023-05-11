import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';

const MovieList = ({ movies, onOpenPopup }) => {
  const [sorting, setSorting] = useState('default');

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  const sortMovies = (movies) => {
    switch (sorting) {
      case 'title':
        return [...movies].sort((a, b) => a.Title.localeCompare(b.Title));
      case 'year':
        return [...movies].sort((a, b) => a.Year - b.Year);
      case 'rating':
        return [...movies].sort((a, b) => b.Rating - a.Rating);
      default:
        return movies;
    }
  };

  const sortedMovies = sortMovies(movies);

  return (
    <div>
      <div className="sort-options">
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" value={sorting} onChange={handleSortingChange}>
          <option value="default">Default</option>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="gallery-container">
        {sortedMovies.map((movie) => (
          <MovieCard 
            movie={movie}
            key={movie.id}
            onOpenPopup={() => onOpenPopup(movie)} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
