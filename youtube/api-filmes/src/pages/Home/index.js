import { Container, Movie, MovieList } from "./styles"
import { useState, useEffect } from 'react'
import { APIKey } from '../../config/key'
import { Link } from 'react-router-dom'

function Home() {

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=${page}`)
      .then(r => r.json())
      .then(data => {
        if (movies.length > 1) {
          setMovies([...movies, ...data.results])
        } else {
          setMovies(data.results)
        }
      })
  }, [page])

  const handleClick = () => {
    setPage(page + 1)
  }

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
      <button onClick={handleClick}>CARREGAR MAIS</button>
    </Container>
  )
}

export default Home