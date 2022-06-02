import axios from "axios";
import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddForm({ handleClose, show, setRecords }) {
  const fullName = useRef();
  const gender = useRef();
  const birthDate = useRef();
  const kids = useRef();
  const aboutUs = useRef();

  const addRecordHandler = async () => {
    await axios.post(`${process.env.REACT_APP_API}`, {
      fullName: fullName.current.value,
      birthDate: birthDate.current.value,
      numberOfKids: kids.current.value,
      howDoYouHearAboutUs: aboutUs.current.value,
      gender: gender.current.value,
    });

    const res = await axios.get(`${process.env.REACT_APP_API}`);

    const recordsList = res.data;

    setRecords(recordsList);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Record</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full Name"
              ref={fullName}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select ref={gender}>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="Date" ref={birthDate} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number Of Kids</Form.Label>
            <Form.Control type="number" ref={kids} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How Do You Hear About Us?</Form.Label>
            <Form.Select ref={aboutUs}>
              <option>Google</option>
              <option>TV</option>
              <option>Radio</option>
              <option>Social Network</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={addRecordHandler}>
          Save changes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
