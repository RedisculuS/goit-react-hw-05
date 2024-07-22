import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../api';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.castTitle}>Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            {member.name} <span className={css.orangeText}>as</span> {member.character}
          </li>
        ))}
      </ul>
    </div>
  );
}
