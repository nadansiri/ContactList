import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ContactElement = (props) => {
  return (
    <div className="ContactElement">
      <h2>{props.contactEl.firstName} {props.contactEl.lastName}</h2>
      <hr />
      <div className="Contact">
        <div className="ContactDetails1">
          <Card.Img
            style={{ width: "15rem", margin: "auto" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqI4txTRkj4_pCfr3NlNdbCbLYgX-nqjMX8wHEfx_A6Q8luaudlecd84nMDGZ1a4nwA0&usqp=CAU"
            roundedCircle
            alt="contact photo"
          />
        </div>
        <div className="ContactDetails2">
          <ListGroup>
            <ListGroupItem variant="light">
              FirstName: <b> {props.contactEl.firstName}</b>
            </ListGroupItem>
            <ListGroupItem variant="light">
              LastName: <b>{props.contactEl.lastName}</b>
            </ListGroupItem>
            <ListGroupItem variant="light">
              Email: <b>{props.contactEl.email}</b>
            </ListGroupItem>
            <ListGroupItem variant="light">
              Phone Number: <b>{props.contactEl.phone}</b>
            </ListGroupItem>
            <ListGroupItem variant="light">
              <Link to="/">Back to Contacts</Link>{" "}
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default ContactElement;
