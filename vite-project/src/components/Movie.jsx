import React from 'react'
import styles from "./movieStyle.module.css"


const Movie = (props) => {
  return (
    <div className={styles.movieContent}>
    
    <img className={styles.poster} src={props.movie.Poster} alt="movie" />
    <div className={styles.movieText}>
     <h4>{props.movie.Title}</h4>
     <h5>Type: {props.movie.Type}</h5>
     <h5>Year: {props.movie.Year} </h5>
     </div>

    </div>
  )
}

export default Movie