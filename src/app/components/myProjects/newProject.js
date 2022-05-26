import React from 'react'
import { Formik } from 'formik'
import { Card, Container } from 'react-bootstrap'

import { FormProject } from '../commons/formProject'
import { createProjectSchema } from '../commons/schemas'
import { Styles } from './styles/projectStyles'

export const NewProject = ({
  formValues,
  status,
  dispatch,
  serverError,
  allUsers,
  created,
  addNewProject,
  isRowBased
}) => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={Styles.mainContainer(isRowBased)}
    >
      <Card
        style={Styles.card(isRowBased)}
        className='d-flex justify-content-center align-items-center'
      >
        <Card.Title
          className='d-flex justify-content-center align-items-center'
          style={Styles.title}
        >
          Create new project
        </Card.Title>
        <Card.Body className='d-flex justify-content-center '>
          <Formik
            initialValues={formValues}
            validationSchema={createProjectSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addNewProject(values))
              resetForm()
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <FormProject
                Styles={Styles}
                status={status}
                allUsers={allUsers}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                created={created}
                serverError={serverError}
                buttonText='Create'
                isRowBased={isRowBased}
              />
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  )
}
