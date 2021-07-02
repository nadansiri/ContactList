import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import NewContact from "./NewContact";
import SearchForContact from "./SearchForContact";

const MyNavbar = (props) => {
  return (
      <div className="MyNavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link to="/about">
                <Link to="/about">About</Link>
              </Nav.Link>
                <NewContact Add={props.Add} />
            </Nav>
            <Nav><SearchForContact SearchBy={props.SearchBy}/> </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
};

export default MyNavbar;
