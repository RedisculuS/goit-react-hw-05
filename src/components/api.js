import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTM0NDE1YjI4YzBmOTYwMTIzZDVmZDUyZjI1OWIwNyIsIm5iZiI6MTcyMTY0ODUxMi4wNzQ2NTIsInN1YiI6IjY2OWU0NGRhMTgxOWIxOWYzNjQ3YTYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MCPjy57a0x9zNtS_Smnipd-qzNCKEKc3rWHKpIQxISQ';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  export const fetchTrendingMovies = async () => {
    const url = `${BASE_URL}/trending/movie/day`;
    const response = await axios.get(url, options);
    return response.data.results;
  };
  
  export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie`;
    const params = {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    };
    const response = await axios.get(url, { ...options, params });
    return response.data.results;
  };
  
  export const fetchMovieDetails = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}`;
    const response = await axios.get(url, options);
    return response.data;
  };
  
  export const fetchMovieCast = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}/credits`;
    const response = await axios.get(url, options);
    return response.data.cast;
  };
  
  export const fetchMovieReviews = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}/reviews`;
    const response = await axios.get(url, options);
    return response.data.results;
  };