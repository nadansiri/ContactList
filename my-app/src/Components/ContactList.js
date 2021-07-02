import React from "react";
import { Table, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

const ContactList = ({ contact,Add }) => {
  return (
    <div className="contactList">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        {contact.map((el) => (
          <tbody key={el._id}>
            <tr>
              <td>
                <Link to={`/api/contact/details/${el._id}`}>{el._id}</Link>
              </td>
              <td>{el.firstName}</td>
              <td>{el.lastName}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td className="actionBtn">
                {/*
                  <Button variant="outline-success" className="btn1">
                    Edit
                  </Button>
                <Button variant="outline-danger" className="btn1">
                  Delete
        </Button>*/
                }
                <EditContact contact={el} id={el._id}/> 
                <DeleteContact id={el._id}/>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ContactList;
