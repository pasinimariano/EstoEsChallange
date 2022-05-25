import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ModalDelete = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton className={props.Styles.modalHeader}>
        <Modal.Title id='contained-modal-title-vcenter'>
          Delete Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete the project?</Modal.Body>
      <Modal.Footer>
        <Link to='/home'>
          <Button style={props.Styles.deleteButton} onClick={props.onClick}>
            Delete
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  )
}
