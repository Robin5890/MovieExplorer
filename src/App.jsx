import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />

      </Routes>
    </Router>
  );
}

export default App
