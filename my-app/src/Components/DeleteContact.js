import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteContact = (props) => {
  const deleteID = props.id;
  const handleDelete = () => {
    //e.preventDefault();
    const url3 = "http://localhost:5555/api/contact/remove/"+deleteID;
    console.log(url3)
    axios
      .delete(url3)
      .then(function (response) {
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert(`The contact "${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteContact;
