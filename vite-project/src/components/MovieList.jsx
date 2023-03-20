import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length
        ? movies.map((movie) => (
            <div key={movie.imdbID}>
              <Movie movie={movie} />
            </div>
          ))
        : "Movie List is empty"}
    </div>
  );
};

export default MovieList;
