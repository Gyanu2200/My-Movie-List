import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Alert} from 'react-bootstrap';
import { MovieCard } from './MovieCard';
import { useState } from 'react';
import { fetchData } from '../axiosHelpers';


export const SearchForm = ({addMovieToList}) => {
  const [form ,setForm] = useState("")
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  // get the form data while typing
  const handleOnChange = (e) => {

    const {value} = e.target;
    console.log(e);
    setForm(value);
  }
  // when form is submitted, call the api with the search data and get the movie details
  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    error && setError("");
    movie.imdbID && setMovie({});

    // fetchData(form).then((resp) => {
    //   console.log(resp.data);
    // }).then(()=>{ 
    // }).catch((error) => console.log(error));

    try{
    const resp = await fetchData(form);
    console.log(resp.data);
    
    if(resp.data.Response === "True"){
      setMovie(resp.data);
    }else{
      setError(resp.data.Error);
    }
    // console.log(resp);
    }catch(error){
      console.log(error);
      setError(error);
    }
    // const resp = fetchData(form);
    // console.log(resp);

  }
  const handleOnAddToList = (cat) =>{
    console.log(cat);
    addMovieToList({...movie, cat});
    setMovie({});
    setForm("");
  }
  return (
    <Form className="py-3" onSubmit = {handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
          value={form}
          onChange = {handleOnChange} 
          placeholder="Movie Name" required/>
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
      <Row className="py-3 d-flex justify-content-center">
        {movie.imdbID && <MovieCard movie = {movie}
        func={handleOnAddToList}/>}
        {error && <Alert variant="danger">{error}</Alert>}
        
      </Row>
    </Form>
  );
}


