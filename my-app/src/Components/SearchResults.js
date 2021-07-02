import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

const SearchResults = (props) => {
  let searchKey=props.Search;
  if(searchKey===0)searchKey="search";
  const [results, setResults] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  const url5 = "http://localhost:5555/api/contact/search/" + searchKey;

  useEffect(() => {
    axios
      .get(url5)
      .then(function (response) {
        // handle success
        console.log("response", response);
        if (response.data.length > 0) {
          setResults(response.data);
          console.log("results", results);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(error);
      });
  },[searchKey]);
  const l = results.length;
  return (
    <div>
      <h2>You searched for: "{props.Search}"</h2>
      <hr />
      {l ?  (
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
            {results.map((el, key) => (
                <tbody key={el._id}>
                  <tr>
                    <td>
                      <Link to={`/api/contact/details/${el._id}`}>
                        {el._id}
                      </Link>
                    </td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td className="actionBtn">
                      <EditContact contact={el} id={el._id} />
                      <DeleteContact id={el._id} />
                    </td>
                  </tr>
                </tbody>
              ))
            }
          </Table>
        </div>
      ):(
        <h2>Sorry, no results</h2>
      )}
      
    </div>
  );
};

export default SearchResults;
