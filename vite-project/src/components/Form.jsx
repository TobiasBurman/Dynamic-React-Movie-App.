import React from 'react'

const Form = (props) => {
  return (
    <div>
       <input type="text" value={props.value}
        onChange={ (e) => props.setSearch(e.target.value)}
         placeholder='Search a movie...' /> 
    </div>
  )
}

export default Form