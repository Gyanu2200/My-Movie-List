import React from 'react'
import { Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {BtnGroup} from './BtnGroup';
import { MovieCard } from './MovieCard';

export const MovieList = ({movies}) => {
  return (
    <div className="mt-5 bg-dark p-3 rounded">
    <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
        <BtnGroup/>
        <div className="py-2">{movies.length}</div>
        </Col>
    </Row>
    <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
        {
          movies.map((item)=> <MovieCard
          key={item.imdbID}
          movie={item}/>)
        }
        </Col>
    </Row></div>
  )
}
