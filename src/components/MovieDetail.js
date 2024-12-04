import React from "react";

const MovieDetail = ({ movie, cast }) => {
  if (!movie) return <p>No movie details available.</p>;

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    
    <div style={{ padding: "20px" }}>
      <div style={{display:"float", border: "1px solid black", margin:"30px"}}>
        <div style={{width:"505px", height:"350px", float:"left",backgroundColor:" rgb(25, 10, 38)",borderRadius:"8px 0px 0px 8px"}}>
          <div style={{display:"flex", flexDirection:"row", margin:"10px"}}>
            {movie.poster_path && (
              <img
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "150px", height: "180px", borderRadius: "8px" }}
              />
            )}
            <div style={{ flex: 1 , color:"white", margin:"15px"}}> {/* This div will take the remaining space */}
              <h2>{movie.title}</h2>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
            </div>
          </div> 
          <p style={{color:"white", width:"500px", height:"130px", margin:"15px"}}><strong>Overview:</strong> {movie.overview}</p>
        </div>
        <div style={{float:"right", width:"650px"}}>
        {movie.poster_path && (
              <img
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "650px", height: "350px", borderRadius: "0px 8px 8px 0px" }}
              />
            )}
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <h3 style={{color:"white", marginLeft:"550px"}}>Cast</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "23px" }}>
          {cast.slice(0, 10).map((member) => (
            <div key={member.cast_id} style={{ width: "100px", textAlign: "center" }}>
              {member.profile_path ? (
                <img
                  src={`${baseImageUrl}${member.profile_path}`}
                  alt={member.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                />
              ) : (
                <div style={{ width: "100%", height: "150px", backgroundColor: "#ccc", borderRadius: "8px", color:"white"}} />
              )}
              <p style={{ fontSize: "14px", margin: "5px 0 0", color:"white" }}>{member.name}</p>
              <p style={{ fontSize: "12px", color: "black" }}>{member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;