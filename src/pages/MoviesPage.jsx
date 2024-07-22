import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import { searchMovies } from '../api/api';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchMovies(query);
      setMovies(data);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <main>
      <h1>Movies</h1>
      <div className={css.findWrapper}>
        <input
      className={css.inputMovie}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button className={css.findBtn} onClick={handleSearch}>Search</button>
      </div>
      
      <MovieList movies={movies} />
    </main>
  );
}
