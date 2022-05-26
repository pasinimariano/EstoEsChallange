import React, { useEffect } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormProject } from '../commons/formProject'
import { createProjectSchema } from '../commons/schemas'
import { updateProject } from '../../redux/features/projectsSlices'
import { Styles } from './styles/modalStyles'

export const ModalUpdate = props => {
  const data = props.data
  const setFormValues = props.setFormValues
  const status = [
    { id: 'unassigned', firstname: 'unassigned', lastname: '' },
    { id: 'assigned', firstname: 'assigned', lastname: '' },
    { id: 'on-progress', firstname: 'on-progress', lastname: '' },
    { id: 'review', firstname: 'review', lastname: '' },
    { id: 'done', firstname: 'done', lastname: '' },
    { id: 'standby', firstname: 'standby', lastname: '' }
  ]

  useEffect(() => {
    if (props.show) {
      setFormValues(prevState => ({
        ...prevState,
        id: data.id,
        name: data.name,
        description: data.description,
        manager: data.manager,
        assigned: data.assigned,
        status: data.status,
        created_at: data.created_at
      }))
    } else {
      setFormValues({
        id: '',
        name: '',
        description: '',
        manager: '',
        assigned: '',
        status: '',
        created_at: '',
        updated_at: Date().toLocaleString()
      })
    }
  }, [props.show])

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Update Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={Styles.modalContainer(props.isRowBased)}
        className='d-flex flex-column justify-content-center align-items-center'
      >
        <h5 style={Styles.title(props.isRowBased)}>{`ID: ${data.id}`}</h5>
        {props.formValues.id ? (
          <Formik
            initialValues={props.formValues}
            validationSchema={createProjectSchema}
            onSubmit={values => {
              props.dispatch(updateProject(values))
              props.onHide()
              window.location.reload(false)
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <FormProject
                Styles={Styles}
                status={status}
                allUsers={props.allUsers}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                created={props.created}
                serverError={props.serverError}
                buttonText='Update'
                isRowBased={props.isRowBased}
              />
            )}
          </Formik>
        ) : (
          <Spinner />
        )}
      </Modal.Body>
    </Modal>
  )
}
