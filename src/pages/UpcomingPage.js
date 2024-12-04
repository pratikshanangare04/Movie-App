import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1")
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching upcoming movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{color:"white"}}>Loading...</p>;

  return <MovieList movies={movies} />;
};

export default UpcomingPage;
