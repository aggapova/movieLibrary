import React from 'react';
import MovieList from '../components/movie-list/movie-list';
import MoviePopup from '../components/movie-popup/movie-popup';
import { useState, useEffect } from "react";


const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const [showMovies, setShowMovies] = useState(false);
    const [searchInput, setSearchInput] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:8000/movies')
        .then((response) => response.json())
        .then((apiMovies) => {
          setMovies(apiMovies);
          setShowMovies(true);
        });
    }, []);
  
    const searchMoviesHandler = (event) => {
      const search = event.target.value.toLocaleLowerCase();
      setSearchInput(search);
    };
  
    const filteredMovies = movies.filter((movie) =>
      movie.Title.toLocaleLowerCase().includes(searchInput)
    );
  
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    const handleOpenPopup = (movie) => {
      setSelectedMovie(movie);
    };
  
    const handleClosePopup = () => {
      setSelectedMovie(null);
    };
  
    let renderMovies = "Loading movies....";
  
    if (showMovies) {
      renderMovies = (
        <MovieList movies={filteredMovies} onOpenPopup={handleOpenPopup} />
      );
    }
  
    return (
      <>
        <h1>MovieLibrary</h1>
        <input
          type="search"
          placeholder="What do you want to watch?"
          onChange={searchMoviesHandler}
        />
        {selectedMovie && (
          <MoviePopup movie={selectedMovie} onClosePopup={handleClosePopup} />
        )}
        {renderMovies}
      </>
    );
  };
  
  export default MainPage;