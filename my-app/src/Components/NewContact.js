import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
const NewContact = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [NewContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
  });
  const AddNewContact = (e) => {
    setNewContact({ ...NewContact, [e.target.name]: e.target.value });
  };
  const handleSave = (e) => {
    setShow(false);
    const url = "http://localhost:5555/api/contact/all";
    const url2 = "http://localhost:5555/api/contact/new";
      axios
        .post(url2,NewContact)
        .then(function (response) {
          console.log("response", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        props.Add(NewContact);
        ;}

 
  return (
    <div className="NewContact">
      <>
        <Button variant="outline-success" onClick={handleShow} className="btn2">
          Add A New Contact
        </Button>

        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Add A New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            First Name:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="First Name"
                name="firstName"
                onChange={AddNewContact}
              />
            </InputGroup>
            Last Name:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Last Name"
                name="lastName"
                onChange={AddNewContact}
              />
            </InputGroup>
            Email:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                name="email"
                onChange={AddNewContact}
              />
            </InputGroup>
            Phone Number:
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Phone Number"
                name="phone"
                onChange={AddNewContact}
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

export default NewContact;
