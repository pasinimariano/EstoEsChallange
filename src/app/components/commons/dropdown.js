import React from 'react'
import { Form } from 'react-bootstrap'

export const Dropdowns = ({ label, name, values, onChange, state, styles }) => {
  return (
    <Form.Group style={styles}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as='select' name={name} value={values} onChange={onChange}>
        <option>{`Select ${name}`}</option>
        {state.map(obj => {
          return (
            <option key={obj.id} value={obj.id}>
              {`${obj.firstname.toUpperCase()} ${obj.lastname.toUpperCase()}`}
            </option>
          )
        })}
      </Form.Control>
    </Form.Group>
  )
}
