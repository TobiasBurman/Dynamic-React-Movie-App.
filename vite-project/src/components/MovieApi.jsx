import React from "react";
import Form from "./Form";
import MovieList from "./MovieList";
import { useState, useEffect } from 'react'


const MovieApi = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("")
    const [error, setError] = useState('');
  const getMovies = async (search) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=21adb06f&s=${search}`
      );
      const moviesResponse = await response.json();
      if (moviesResponse.Search) {
        setMovies(moviesResponse.Search);
        setError(" ");
      } else {
        console.log("errrrr");
        setMovies([]);
        setError(moviesResponse.Error);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching the data");
    }
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
  <div className="container-fluid movie-app">
    <div className="row">
    <Form  search = {search} setSearch={setSearch}/><p>{error}</p>
    <MovieList movies={movies} />
    </div>
  </div>
  );
};

export default MovieApi;
