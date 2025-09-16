import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // Replace with your OMDb API key

const Details = () => {
  const { id } = useParams(); // get the imdbID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!movie || movie.Response === "False")
    return <div className="p-6 text-center">Movie not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-64 rounded-lg shadow-lg"
        />
        <div className="text-left">
          <p><span className="font-bold">Year:</span> {movie.Year}</p>
          <p><span className="font-bold">Genre:</span> {movie.Genre}</p>
          <p><span className="font-bold">Director:</span> {movie.Director}</p>
          <p><span className="font-bold">Actors:</span> {movie.Actors}</p>
          <p className="mt-4">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

