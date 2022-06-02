import axios from "axios";
import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UpdateForm({ handleClose, show, record, setRecords }) {
  const fullName = useRef();
  const gender = useRef();
  const birthDate = useRef();
  const kids = useRef();
  const aboutUs = useRef();

  const updateRecordHandler = async () => {
    await axios.put(`${process.env.REACT_APP_API}/${record.id}`, {
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
        <Modal.Title>Update Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full Name"
              defaultValue={record.fullName}
              ref={fullName}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select ref={gender} defaultValue={record.gender}>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="Date"
              ref={birthDate}
              defaultValue="2022-04-24"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number Of Kids</Form.Label>
            <Form.Control
              type="number"
              ref={kids}
              defaultValue={record.numberOfKids}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How Do You Hear About Us?</Form.Label>
            <Form.Select
              ref={aboutUs}
              defaultValue={record.howDoYouHearAboutUs}
            >
              <option>Google</option>
              <option>TV</option>
              <option>Radio</option>
              <option>Social Network</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={updateRecordHandler}>
          Save changes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateForm;
