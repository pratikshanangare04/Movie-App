import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import SearchResults from "./pages/SearchResults";
import SingleMoviePage from "./pages/SingleMoviePage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-rated" element={<TopRatedPage />} />
      <Route path="/upcoming" element={<UpcomingPage />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/movie/:id" element={<SingleMoviePage />} />
    </Routes>
  </Router>
);

export default App;

