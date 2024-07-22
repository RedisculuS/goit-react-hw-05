import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../components/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
        
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Welcome Home</h1>
      <MovieList movies={movies} />
    </main>
  );
}
