import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateForm from "../form/UpdateForm";
import ViewForm from "../form/ViewForm";
import axios from "axios";

function Record({ record, setRecords }) {
  const [showFrom, setShowForm] = useState(false);
  const [showViewFrom, setShowViewForm] = useState(false);

  const deleteRecordHandler = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API}/${id}`);

    const res = await axios.get(`${process.env.REACT_APP_API}`);

    const recordsList = res.data;

    setRecords(recordsList);
  };

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div>
      <h2>{record.fullName}</h2>
      <div>
        <Button
          variant="primary"
          onClick={() => setShowViewForm(!showViewFrom)}
        >
          View
        </Button>
        <Button variant="warning" onClick={showFormHandler}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteRecordHandler(record.id)}>
          Delete
        </Button>
      </div>
      <UpdateForm
        show={showFrom}
        handleClose={showFormHandler}
        record={record}
        setRecords={setRecords}
      />
      <ViewForm
        show={showViewFrom}
        handleClose={setShowViewForm}
        record={record}
      />
    </div>
  );
}

export default Record;
