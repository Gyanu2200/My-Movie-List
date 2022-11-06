import {React, Button, ButtonGroup} from 'react-bootstrap'

export const BtnGroup = ({handleOnFilter}) => {
  return (
        <ButtonGroup aria-label="Basic example">
            <Button onClick={()=>handleOnFilter('all')} variant="primary">All</Button>
            <Button onClick={()=>handleOnFilter('happy')} variant="danger">Happy</Button>
            <Button onClick={()=>handleOnFilter('lazy')} variant="warning">Lazy</Button>
        </ButtonGroup>
  )
}

