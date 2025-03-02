import movies from "./movies"
import { useState, useEffect } from "react"

function App() {

const [moviesList, setMoviesList] = useState(movies)
const [selectedGenre, setSelectedGenre] = useState()

if (!selectedGenre) {
  setMoviesList(movies);
  return
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
          <option value="Commedia">Commedia</option>
          <option value="Drammatico">Drammatico</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit">Filtra</button>
      </form>
    </>
   
  )
}
export default App
