import { useState, useEffect } from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from "./icon.svg"
import NavBar from "./NavBar";

const API_URL = "http://www.omdbapi.com?apikey=6f069dee";

function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);


  return (
    <>
    <NavBar></NavBar>
      <div className="app">
         <div className="search">
          <input placeholder="Search for movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  )
}

export default App