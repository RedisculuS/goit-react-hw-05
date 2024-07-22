import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { searchMovies } from '../../components/api';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const data = await searchMovies(query);
          setMovies(data);
        } catch (error) {
          console.error('Error searching movies:', error);
        }
      };

      fetchMovies();
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchQuery = form.elements.query.value;
    setSearchParams({ query: searchQuery });
  };

  return (
    <main >
      <h1>Movies</h1>
      <form className={css.findWrapper} onSubmit={handleSearch}>
        <input
        className={css.inputMovie}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search for movies..."
        />
        <button className={css.findBtn} type="submit">Search</button>
      </form>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p className={css.noMovies}>No movies found.</p>
      )}
    </main>
  );
}
