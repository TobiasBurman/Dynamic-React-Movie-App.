import React from "react";

const Form = (props) => {
  function handleTypeChange(e) {
    props.setType(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search a movie..."
      />

      <select onChange={handleTypeChange}>
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="game">Games</option>
      </select>
    </div>
  );
};

export default Form;
