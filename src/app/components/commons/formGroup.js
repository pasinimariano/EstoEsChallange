import React from 'react'
import { Form } from 'react-bootstrap'

export const FormGroup = ({
  controlId,
  style,
  type,
  name,
  placeholder,
  values,
  handleChange,
  touched,
  errors
}) => {
  return (
    <Form.Group style={style}>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={values}
        onChange={handleChange}
        isValid={touched && !errors}
        isInvalid={!!errors}
      />
      <Form.Control.Feedback type='invalid'>{errors}</Form.Control.Feedback>
    </Form.Group>
  )
}
