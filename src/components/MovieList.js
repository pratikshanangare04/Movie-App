import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} baseImageUrl="https://image.tmdb.org/t/p/w500" />
    ))}
  </div>
);

export default MovieList;
