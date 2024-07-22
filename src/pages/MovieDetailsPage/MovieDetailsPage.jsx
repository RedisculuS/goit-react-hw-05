import React, { useState, useEffect, useRef } from 'react';
import { useParams, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/api';
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main>
      <button className={css.backBtn} onClick={() => navigate(previousLocation.current)}>Go back</button>

      <div className={css.titleWrapper}><h1>{movie.original_title}</h1></div>
      <div className={css.imgWrapper}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
        <p className={css.movieDescr}>{movie.overview}</p> 
      </div>
      <nav className={css.navBarCastReviews}>
        <NavLink className={css.linkNavBar} to="cast" state={{ from: previousLocation.current }}>Cast</NavLink>
        <NavLink className={css.linkNavBar} to="reviews" state={{ from: previousLocation.current }}>Reviews</NavLink>
      </nav>
      <Outlet />
    </main>
  );
}
