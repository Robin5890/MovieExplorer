function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard
