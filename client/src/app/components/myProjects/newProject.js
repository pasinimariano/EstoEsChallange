import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { Form, Card, Container, Button } from 'react-bootstrap'

import { FormGroup } from '../commons/formGroup'
import { Dropdowns } from '../commons/dropdown'
import { createProjectSchema } from '../commons/schemas'
import { Styles } from './styles/projectStyles'

export const NewProject = ({
  formValues,
  status,
  dispatch,
  serverError,
  allUsers,
  created,
  addNewProject
}) => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={Styles.mainContainer}
    >
      <Card
        style={Styles.card}
        className='d-flex justify-content-center align-items-center'
      >
        <Card.Title
          className='d-flex justify-content-center align-items-center'
          style={Styles.title}
        >
          Create new project
        </Card.Title>
        <Card.Body>
          <Formik
            initialValues={formValues}
            validationSchema={createProjectSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addNewProject(values))
              if (created) resetForm()
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className='d-flex flex-column align-items-center'
                style={Styles.formContainer}
              >
                <FormGroup
                  type='text'
                  name='name'
                  placeholder='Project Name'
                  values={values.name}
                  handleChange={handleChange}
                  touched={touched.name}
                  errors={errors.name}
                  style={Styles.form}
                />
                <FormGroup
                  type='text'
                  name='description'
                  placeholder='Description'
                  values={values.description}
                  handleChange={handleChange}
                  touched={touched.description}
                  errors={errors.description}
                  style={Styles.form}
                />

                <Dropdowns
                  label='Project Manager'
                  name='manager'
                  values={values.manager}
                  onChange={handleChange}
                  state={allUsers}
                  styles={Styles.form}
                />
                <Dropdowns
                  label='Status'
                  name='status'
                  values={values.status}
                  onChange={handleChange}
                  state={status}
                  styles={Styles.form}
                />
                <Button type='submit' style={Styles.button}>
                  Create
                </Button>
                {serverError ? (
                  <h6 style={Styles.error}>{serverError}</h6>
                ) : null}
                {created ? (
                  <h6 style={Styles.success}>Project created successfully</h6>
                ) : null}
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  )
}
