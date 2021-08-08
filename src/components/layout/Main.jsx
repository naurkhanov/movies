import React, { useEffect, useState } from 'react';
import { Movies } from '../Movies';
import { Preloader } from '../Preloader';
import { Search } from '../Search';

function Main() {
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}=matrix`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search, setLoading(false)));
  }, []);

  const [movies, setMovies] = useState([]);

  const SearchMovies = async (str, categories) => {
    setLoading(true);
    await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}=${str}${
        categories !== 'all' ? `&type=${categories}` : ''
      }`,
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search, setLoading(false)));
  };

  return (
    <main className="container content">
      <Search searchMovies={SearchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} setM={setMovies} />}
    </main>
  );
}

export { Main };
