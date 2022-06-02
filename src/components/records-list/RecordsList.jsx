import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Record from "../record/Record";
import AddForm from "../form/AddForm";
import { Button } from "react-bootstrap";

function RecordsList() {
  const [records, setRecords] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}`);

      const recordsList = res.data;

      setRecords(recordsList);
    })();
  }, []);

  useEffect(() => {});
  return (
    <>
      <Button onClick={() => setShowAddForm(!showAddForm)}>Add Record</Button>
      <AddForm
        show={showAddForm}
        handleClose={() => setShowAddForm(!showAddForm)}
        setRecords={setRecords}
      />
      {records.map((item) => {
        return <Record record={item} setRecords={setRecords} key={item.id} />;
      })}
    </>
  );
}

export default RecordsList;
