import React from 'react'

const Movie = (props) => {
  return (
    <div>

    <img src={props.movie.Poster} alt="movie" /> <li>{props.movie.Title} {props.movie.Year} {props.movie.Type}</li>

    </div>
  )
}

export default Movie