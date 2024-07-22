import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {movies.map((movie) => (
        <li key={movie.id}  className={css.cardWrapper}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
            <h3 className={css.movieName}>{movie.original_title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
