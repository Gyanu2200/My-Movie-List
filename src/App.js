import './App.css';
import { Button, Container } from 'react-bootstrap';
import { Title } from './component/Title';
import { SearchForm } from './component/SearchForm';
import { MovieList } from './component/MovieList';
import { useState } from 'react';




function App() {
  const [movies, setMovies] = useState([]);
  const addMovieToList = (movieObj) => {
    const newArg = movies.filter((item)=>item.imdbID !== movieObj.imdbID)
    setMovies([...newArg, movieObj]);
    console.log(movies);
  };
  const handleOnDelete = (id) =>{
    if(window.confirm("Are you sure you want to delete this movie")){
      setMovies(movies.filter((item) => item.imdbID != id))
    }
  }
  return (
    <div className="wrapper">
      <Container>
        {/* title */}
        <Title/>

        {/* form */}
        <SearchForm addMovieToList={addMovieToList}/>

        {/* movie list */}
        <MovieList 
        movies={movies}
        handleOnDelete={handleOnDelete}/>
      </Container>
    </div>
  );
}

export default App;
