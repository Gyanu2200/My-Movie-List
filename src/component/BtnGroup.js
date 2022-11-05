import {React, Button, ButtonGroup} from 'react-bootstrap'

export const BtnGroup = () => {
  return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="danger">Happy</Button>
            <Button variant="warning">Lazy</Button>
        </ButtonGroup>
  )
}

