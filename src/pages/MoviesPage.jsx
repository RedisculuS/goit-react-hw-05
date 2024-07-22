import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const url = 'https://api.themoviedb.org/3/search/movie';
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTM0NDE1YjI4YzBmOTYwMTIzZDVmZDUyZjI1OWIwNyIsIm5iZiI6MTcyMTY0ODUxMi4wNzQ2NTIsInN1YiI6IjY2OWU0NGRhMTgxOWIxOWYzNjQ3YTYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MCPjy57a0x9zNtS_Smnipd-qzNCKEKc3rWHKpIQxISQ',
      },
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    };

    try {
      const response = await axios.get(url, options);
      setMovies(response.data.results);
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
