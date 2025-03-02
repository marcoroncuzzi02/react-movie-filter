import movies from "./movies"
import { useState, useEffect } from "react"

function App() {

const [moviesList, setMoviesList] = useState(movies)
const [selectedGenre, setSelectedGenre] = useState()


const filter = (e) => {
  
  e.preventDefault();

if (!selectedGenre) {
  setMoviesList(movies);
  return
}
const filteredMovies = movies.filter(movie => 
  movie.genre.toLowerCase() === selectedGenre.toLowerCase()
);

setMoviesList(filteredMovies);
}


  return(
    <>
      <ul>
      {moviesList.map( (element,index) => ( 
        <li
        key= {index}>
        {element.title} - {element.genre}
        </li>
      ) ) }
      </ul>
      <form onSubmit={filter}>
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti i generi</option>
          <option value="Azione">Azione</option>
          <option value="Romantico">Romantico</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button type="submit">Filtra</button>
      </form>
    </>
   
  )
}
export default App
