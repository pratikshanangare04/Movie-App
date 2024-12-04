import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      if (!isNaN(query.trim())) {
        navigate(`/movie/${query.trim()}`);
      } else {
        navigate(`/search?query=${query}`);
      }
    }
    setQuery("");
  };
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff", display:"flex", justifyContent:"flex-end"}}>
      <Link to="/" style={{ marginRight: "20px", color: "#fff", textDecoration:"none"}}>Home</Link>
      <Link to="/top-rated" style={{ marginRight: "20px", color: "#fff",textDecoration:"none" }}>Top Rated</Link>
      <Link to="/upcoming" style={{ marginRight: "20px", color: "#fff",textDecoration:"none" }}>Upcoming</Link>
      <form onSubmit={handleSearch} style={{ display: "inline" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movies"
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button type="submit" style={{height:"30px", backgroundColor:"rgb(19, 12, 26)",color:"white", border:"0px"}}>Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
