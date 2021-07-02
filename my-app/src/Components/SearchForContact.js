import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const SearchForContact = (props) => {
  return (
    <div className="SearchForContact">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          onChange={props.SearchBy}
        />
        <Button variant="outline-success"><Link to={`/api/contact/search/`}>Search</Link></Button>
      </Form>
    </div>
  );
};

export default SearchForContact;
