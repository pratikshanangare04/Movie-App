import React from "react";

const MovieCard = ({ movie, baseImageUrl }) => (
  <div style={{ width: "250px", padding: "10px", marginLeft:"20px"}}>
    <img
      src={`${baseImageUrl}${movie.poster_path}`}
      alt={movie.title}
      style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }} // Set height here
    />
    <h3 style={{color:"white"}}>{movie.title}</h3>
    <p style={{color:"white"}}> Rating: {movie.vote_average}</p>
  </div>
);

export default MovieCard;