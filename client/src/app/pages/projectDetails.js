import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap'

import { ModalDelete } from '../components/myProjects/modalDelete'
import { Styles } from './styles/projectDetailsStyles'

export const ProjectDetails = () => {
  const [modalShow, setModalShow] = useState(false)
  const location = useLocation()
  const { project, manager, assigned } = location.state

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={Styles.mainContainer}
    >
      <Card style={Styles.cardContainer}>
        <Card.Header className='d-flex justify-content-center'>{`ID: ${project.id}`}</Card.Header>
        <Card.Body className='d-flex flex-column justify-content-center'>
          <Card.Title> {project.name.toUpperCase()} </Card.Title>
          <h6>{`Description: ${project.description}`}</h6>
          <h6>{`Manager: ${manager.fullname}`}</h6>
          <h6>{`Assigned to: ${assigned}`}</h6>
          <h6>{`Status: ${project.status}`}</h6>
          <h6>{`Created at: ${project.created_at}`}</h6>
          <h6>{`Last update: ${project.updated_at}`}</h6>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-around'>
          <Link to='/home'>
            <Button style={Styles.homeButton}> Home </Button>
          </Link>
          <Button
            style={Styles.deleteButton}
            onClick={() => setModalShow(true)}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
      <ModalDelete
        show={modalShow}
        onHide={() => {
          setModalShow(false)
        }}
        Styles={Styles}
      />
    </Container>
  )
}
