import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (searchTerm) => {
        setLoading(true);
        try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]); // no results
        alert("No movies found!");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };



  return (
    <div>
      <SearchBar onSearch={fetchMovies} />

      {loading ? (
        <p className="text-center text-gray-700">Loading...</p>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>


  )
}

export default Home