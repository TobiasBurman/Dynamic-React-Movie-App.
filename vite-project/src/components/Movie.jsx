import React from 'react'

const Movie = (props) => {
  return (
    <div>

    <img src={props.movie.Poster} alt="movie" />
     <p>{props.movie.Title}</p>
     <p>{props.movie.Type}</p>
     <p>{props.movie.Year} </p>

    </div>
  )
}

export default Movie