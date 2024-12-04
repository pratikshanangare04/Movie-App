// src/pages/SingleMoviePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail"; // Component to display movie details

const SingleMoviePage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]); // State for cast information
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        setMovie(movieResponse.data);

        // Fetch cast details
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        setCast(castResponse.data.cast);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie and cast details:", error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) return <p style={{color:"white"}}>Loading...</p>;

  return movie ? <MovieDetail movie={movie} cast={cast} /> : <p>Movie not found.</p>;
};

export default SingleMoviePage;
