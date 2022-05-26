import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Image, Col, Form, Button } from 'react-bootstrap'

import { Pagination } from './pagination'
import { ModalUpdate } from './modalUpdate'
import { Styles } from './styles/listStyles'

export const ProjectList = ({
  modalShow,
  setModalShow,
  selection,
  pagination,
  status,
  indexFirstProject,
  indexLastProject,
  formValues,
  dispatch,
  setFormValues,
  projectsXpage,
  created,
  serverError,
  allProjects,
  allUsers,
  getUserById,
  nextPage,
  prevPage,
  handleNameSelection,
  handleStatusSelection,
  handleForm,
  isRowBased
}) => {
  return (
    <Container>
      <Container className='d-flex flex-column justify-content-center mt-2'>
        <Form className='d-flex flex-column align-items-center justify-content-center'>
          <Form.Label>Search project</Form.Label>
          <Form.Control
            type='text'
            placeholder='Project name'
            name='name'
            value={selection.name}
            onChange={handleNameSelection}
            style={Styles.form(isRowBased)}
          />
        </Form>
        <Form className='d-flex flex-column align-items-center justify-content-center'>
          <Form.Label> Filter by status </Form.Label>
          <Form.Control
            as='select'
            name='status'
            value={selection.status}
            onChange={handleStatusSelection}
            style={Styles.form(isRowBased)}
          >
            {status.map(stat => {
              return (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              )
            })}
          </Form.Control>
        </Form>
      </Container>
      <Container
        style={Styles.mainContainer(isRowBased)}
        className='d-flex flex-wrap justify-content-around'
      >
        {allProjects.length === 0 ? (
          <h4> Create projects to view them here </h4>
        ) : pagination.length === 0 ? (
          <h4> Nothing to show </h4>
        ) : (
          pagination &&
          pagination.map(project => {
            const user = getUserById(project.manager, allUsers)
            const assignation = getUserById(project.assigned, allUsers)
            return (
              <Card
                key={project.id}
                style={Styles.card(isRowBased)}
                onClick={() => setModalShow({ isOpen: true, data: project })}
              >
                <Card.Header className='d-flex justify-content-end'>
                  <Link
                    to={`/project/${project.id}`}
                    state={{ project, manager: user, assigned: assignation }}
                  >
                    <Button style={Styles.button}> +Info </Button>
                  </Link>
                </Card.Header>
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
          isRowBased={isRowBased}
        />
        <ModalUpdate
          data={modalShow.data}
          allUsers={allUsers}
          dispatch={dispatch}
          created={created}
          serverError={serverError}
          formValues={formValues}
          setFormValues={setFormValues}
          handleForm={handleForm}
          show={modalShow.isOpen}
          onHide={() => {
            setModalShow({ isOpen: false, data: '' })
          }}
          isRowBased={isRowBased}
        />
      </Container>
    </Container>
  )
}
