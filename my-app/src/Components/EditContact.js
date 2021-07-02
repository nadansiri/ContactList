import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const EditContact = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;

  const [EditedContact, setEditedContact] = useState(props.contact);

  const handleEdit = () => {
    setShow(true);
  };
  const EditTheContact = (e) => {
    setEditedContact({ ...EditedContact, [e.target.name]: e.target.value });
  };
  const handleSave = (e) => {
    setShow(false);
    const url4 = "http://localhost:5555/api/contact/update/" + updateID;
    console.log(url4);
    axios
      .put(url4, EditedContact)
      .then(function (response) {
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        variant="outline-success"
        className="btn1"
        onClick={handleEdit}
        className="btn1"
      >
        Edit
      </Button>
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            First Name:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="First Name"
                name="firstName"
                onChange={EditTheContact}
              />
            </InputGroup>
            Last Name:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Last Name"
                name="lastName"
                onChange={EditTheContact}
              />
            </InputGroup>
            Email:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                name="email"
                onChange={EditTheContact}
              />
            </InputGroup>
            Phone Number:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Phone Number"
                name="phone"
                onChange={EditTheContact}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default EditContact;
