import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { FormGroup } from './formGroup'
import { Dropdowns } from './dropdown'

export const FormProject = ({
  Styles,
  status,
  allUsers,
  errors,
  touched,
  handleChange,
  handleSubmit,
  values,
  created,
  serverError,
  buttonText,
  isRowBased
}) => {
  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className='d-flex flex-column align-items-center'
      style={Styles.formContainer(isRowBased)}
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
        label='Assigned to'
        name='assigned'
        values={values.assigned}
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
        {buttonText}
      </Button>
      {serverError ? <h6 style={Styles.error}>{serverError}</h6> : null}
      {created ? (
        <h6 style={Styles.success}>Project created successfully</h6>
      ) : null}
    </Form>
  )
}
