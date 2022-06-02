import React from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";

function ViewForm({ show, handleClose, record }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>Name: {record.fullName}</ListGroup.Item>
          <ListGroup.Item>Gender: {record.gender}</ListGroup.Item>
          <ListGroup.Item>Birth Date: {record.birthDate}</ListGroup.Item>
          <ListGroup.Item>Number Of Kids: {record.numberOfKids}</ListGroup.Item>
          <ListGroup.Item>
            How Do You Hear About Us: {record.howDoYouHearAboutUs}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewForm;
