import React, { useEffect, useState } from 'react'
import { Col, Row} from 'react-bootstrap';
import {BtnGroup} from './BtnGroup';
import { MovieCard } from './MovieCard';

export const MovieList = ({movies, showDelete, handleOnDelete}) => {
  const [display, setDisplay] = useState([]);
  
  useEffect(()=>{
    setDisplay(movies);
  },[movies])
  //render all the time -> with out dependency array
  //render one time and only render if some specific props updates
  //render if some specififc props updates [variables]

  const handleOnFilter = str =>{
    // console.log(str);
    // if(str === 'all'){
    //   setDisplay(movies);
    //   return;
    // };

    // const filteredArg = movies.filter((item)=> item.cat === str);
    // setDisplay(movies.filter((item)=> item.cat === str));

    str === 'all' ? setDisplay(movies) : setDisplay(movies.filter((item)=> item.cat === str));
  }

  return (
    <div className="mt-5 bg-dark p-3 rounded">
    <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
        <BtnGroup handleOnFilter={handleOnFilter}/>
        <div className="py-2">{display.length}</div>
        </Col>
    </Row>
    <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
        {
          display.map((item)=> <MovieCard
          key={item.imdbID}
          movie={item} 
          showDelete={true}
          func={handleOnDelete}
          />)
        }
        </Col>
    </Row></div>
  )
}
