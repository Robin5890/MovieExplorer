import { Link } from "react-router-dom";

const MovieGrid = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div className="p-6 text-center">No movies found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <Link
          key={movie.imdbID}
          to={`/details/${movie.imdbID}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={movie.Title}
            className="w-full h-72 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieGrid;
