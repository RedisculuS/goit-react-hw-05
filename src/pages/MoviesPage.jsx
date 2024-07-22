import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import { searchMovies } from '../api/api';

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
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </main>
  );
}
