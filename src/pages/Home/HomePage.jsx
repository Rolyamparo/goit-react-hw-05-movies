import React from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'api/api';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    const loadTrendingMovies = async () => {
    try {
      const movies = await fetchTrendingMovies();
      console.log(movies);
      setTrendingMovies(movies);
    } catch (error) {
      console.error(error);
    }
    };
    
    useEffect(() => {
    loadTrendingMovies();
    }, []);
    
     return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Trending Movies</h2>
      {trendingMovies.length && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;