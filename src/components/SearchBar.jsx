import { useState } from "react"


const SearchBar = ( {onSearch} ) => {

const [query, setQuery] = useState("");

const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    
    <div className=" flex justify-center my-6 ">

        <input 
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="px-4 py-2 w-2/3 md:w-1/2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <button
        onClick={handleSearch}
        className="px-4 py-2 bg-amber-400 text-white font-semibold rounded-r-lg hover:bg-amber-500 transition"
      >
        Search
      </button>

    </div>


  )
}

export default SearchBar