import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MoviePopup = ({ movie, onClosePopup }) => {
  return (
    <div className="movie-popup">
        <div className="popup-header">
        <div className="close-button" onClick={onClosePopup}>
            <FaTimes className="close-icon" />
        </div>
        </div>
        <div className="popup-content">
            <div className="popup-image">
                <img src={movie.Poster} alt={movie.Title} style={{ width: '300px' }}  />
            </div>
            <div className="popup-body">
            <div className="movie-info">
                <h2>{movie.Title}</h2>
                <p>Year: {movie.Year}</p>
                <p>Runtime: {movie.Runtime}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Rating: {movie.Rating}</p>
                <p>Description: {movie.Description}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Director: {movie.Director}</p>
                <p>
                Trailer: <a href={movie.Trailer} target="_blank">Watch Now</a>
                </p>
            </div>
            </div>
        </div>
        </div>
  );
};

export default MoviePopup;