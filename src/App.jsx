import movies from "./movies"
import { useState, useEffect } from "react"

function App() {

const [moviesList, setMoviesList] = useState(movies)
const [selectedGenre, setSelectedGenre] = useState()





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
      <form 
      onSubmit={filter}>
        <select>

        </select>
      </form>
    </>
   
  )
}
export default App
