import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form, Button, Image, Card } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormGroup } from '../commons/formGroup'
import { createUserSchema } from '../commons/schemas'
import { createUser, loginUser } from '../../redux/features/authSlice'
import Logo from '../../assets/logo.png'
import { Styles } from './styles/loginStyles.js'

export const Create = ({
  createValues,
  setRender,
  serverError,
  dispatch,
  allUsersState
}) => {
  const created = useSelector(state => state.auth.created)

  useEffect(() => {
    if (created) dispatch(loginUser(created, allUsersState))
  }, [allUsersState])

  return (
    <Card style={Styles.mainContainer}>
      <Card.Body className='d-flex flex-column align-items-center'>
        <Image src={Logo} alt='EstoEsLogo' style={Styles.logo} />
        <h3 style={Styles.title}>¡Welcome to Esto Es!</h3>
        <h3 style={Styles.subtitle}>Manage all your projects in real time</h3>
        <Formik
          initialValues={createValues}
          validationSchema={createUserSchema}
          onSubmit={values => dispatch(createUser(values, allUsersState))}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              className='d-flex flex-column align-items-center'
            >
              <FormGroup
                type='text'
                name='firstname'
                placeholder='Firstname'
                values={values.firstname}
                handleChange={handleChange}
                touched={touched.firstname}
                errors={errors.firstname}
                style={Styles.form}
              />
              <FormGroup
                type='text'
                name='lastname'
                placeholder='Lastname'
                values={values.lastname}
                handleChange={handleChange}
                touched={touched.lastname}
                errors={errors.lastname}
                style={Styles.form}
              />
              <FormGroup
                type='email'
                name='email'
                placeholder='Email'
                values={values.email}
                handleChange={handleChange}
                touched={touched.email}
                errors={errors.email}
                style={Styles.form}
              />
              <FormGroup
                controlId='validationFormikPassword'
                type='password'
                name='password'
                placeholder='Password'
                values={values.password}
                handleChange={handleChange}
                touched={touched.password}
                errors={errors.password}
                style={Styles.form}
              />
              <Button type='submit' style={Styles.button}>
                Create user
              </Button>
              {serverError ? <h6 style={Styles.error}>{serverError}</h6> : null}
            </Form>
          )}
        </Formik>
      </Card.Body>
      <Card.Footer
        style={Styles.footer}
        className='d-flex justify-content-center'
      >
        <h6 style={Styles.title} onClick={() => setRender('login')}>
          Already have an account? Register here
        </h6>
      </Card.Footer>
    </Card>
  )
}
