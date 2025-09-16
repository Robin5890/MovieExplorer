import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-amber-300 px-6 py-3 sticky top-0 z-50 shadow-md">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-white">
        Reel Explorer
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-4">
        {/* <button className="px-4 py-2 text-gray-800 hover:text-white hover:bg-amber-500 rounded-lg transition">
          Home
        </button>
        <button className="px-4 py-2 text-gray-800 hover:text-white hover:bg-amber-500 rounded-lg transition">
          Favorites
        </button> */}
        {/* <button className="px-4 py-2 text-gray-800 hover:text-white hover:bg-amber-500 rounded-lg transition">
          About
        </button> */}
        <Link to="/Home" className="px-4 py-2 text-gray-800 hover:text-white hover:bg-amber-500 rounded-lg transition" > Home </Link>
        
        <Link to="/about" className="px-4 py-2 text-gray-800 hover:text-white hover:bg-amber-500 rounded-lg transition" > About </Link>
        
      </div>
    </nav>
  );
}

export default Navbar
