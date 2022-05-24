import React from 'react'
import { Form, Button, Image, Card } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormGroup } from '../commons/formGroup'
import { loginUserSchema } from '../commons/schemas'
import { loginUser } from '../../redux/features/authSlice'
import Logo from '../../assets/logo.png'
import { Styles } from './styles/loginStyles.js'

export const Login = ({ loginValues, setRender, serverError, dispatch }) => {
  return (
    <Card style={Styles.mainContainer}>
      <Card.Body className='d-flex flex-column align-items-center'>
        <Image src={Logo} alt='EstoEsLogo' style={Styles.logo} />
        <h3 style={Styles.title}>¡Bienvenid@ nuevamente!</h3>
        <Formik
          initialValues={loginValues}
          validationSchema={loginUserSchema}
          onSubmit={values => dispatch(loginUser(values))}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              className='d-flex flex-column align-items-center'
            >
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
                Sign in
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
        <h6 style={Styles.title} onClick={() => setRender('create')}>
          ¿Todavía no tienes cuenta? Creala aquí
        </h6>
      </Card.Footer>
    </Card>
  )
}
