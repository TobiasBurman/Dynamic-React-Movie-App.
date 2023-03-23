import React from "react";
import Movie from "./Movie";
import styles from "./movieStyle.module.css"





const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieListContainer} >
      {movies.length
        ? movies.map((movie) => (
            <div className={styles.movie} key={movie.imdbID }>
              <Movie movie={movie} />
            </div>
          ))
        : "Movie List is empty"}

        
    </div>
  );
};

export default MovieList;
