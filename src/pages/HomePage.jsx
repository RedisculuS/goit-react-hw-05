import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const url = 'https://api.themoviedb.org/3/trending/movie/day';
            const options = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTM0NDE1YjI4YzBmOTYwMTIzZDVmZDUyZjI1OWIwNyIsIm5iZiI6MTcyMTY0ODUxMi4wNzQ2NTIsInN1YiI6IjY2OWU0NGRhMTgxOWIxOWYzNjQ3YTYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MCPjy57a0x9zNtS_Smnipd-qzNCKEKc3rWHKpIQxISQ'
                }
            };

            try {
                const response = await axios.get(url, options);
                setMovies(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, []);

   

    return (
        <main>
            <h1>Welcome Home</h1>
            <MovieList movies={movies} />
        </main>
    );
}