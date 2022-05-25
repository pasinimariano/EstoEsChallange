import React from 'react'
import { Container, Card, Image, Col } from 'react-bootstrap'

import { Pagination } from './pagination'
import { Styles } from './styles/listStyles'

export const ProjectList = ({
  pagination,
  indexFirstProject,
  indexLastProject,
  projectsXpage,
  allProjects,
  getUserById,
  nextPage,
  prevPage,
  allUsers
}) => {
  return (
    <Container
      style={Styles.mainContainer}
      className='d-flex flex-wrap justify-content-around'
    >
      {allProjects.length === 0 ? (
        <h4> Create projects to view them here </h4>
      ) : pagination.length === 0 ? (
        <h4>Loading...</h4>
      ) : (
        pagination &&
        pagination.map(project => {
          const user = getUserById(project.manager, allUsers)
          const assignation = getUserById(project.assigned_to, allUsers)
          return (
            <Card key={project.id} style={Styles.card}>
              <Card.Title
                style={Styles.titleContainer}
                className='d-flex flex-column justify-content-center align-items-center'
              >
                <h6 style={Styles.title}>NAME: {project.name}</h6>
                <h6 style={Styles.title}>STATUS: {project.status}</h6>
              </Card.Title>
              <Card.Body className='d-flex justify-content-center align-items-center'>
                <Col
                  xs={6}
                  className='d-flex flex-column justify-content-center align-items-center'
                >
                  <h6 style={Styles.title}>Manager</h6>
                  <Image
                    src={user.avatar}
                    alt={`${user.id} avatar`}
                    style={Styles.avatar}
                  />
                  <h6>{user.fullname}</h6>
                </Col>
                <Col
                  xs={6}
                  className='d-flex flex-column justify-content-center align-items-center'
                >
                  <h6 style={Styles.title}>Assigned to</h6>
                  {assignation ? (
                    <>
                      <Image
                        src={assignation.avatar}
                        alt={`${assignation.id} avatar`}
                        style={Styles.avatar}
                      />
                      <h6>{assignation.fullname}</h6>
                    </>
                  ) : (
                    <h6>None</h6>
                  )}
                </Col>
              </Card.Body>
              <Card.Footer>
                {project.updated_at ? (
                  <h6>{`Update date: ${project.updated_at}`}</h6>
                ) : (
                  <h6>{`Creation date: ${project.created_at}`}</h6>
                )}
              </Card.Footer>
            </Card>
          )
        })
      )}
      <Pagination
        indexFirstProject={indexFirstProject}
        indexLastProject={indexLastProject}
        projectsXpage={projectsXpage}
        nextPage={nextPage}
        prevPage={prevPage}
        allProjects={allProjects}
      />
    </Container>
  )
}
