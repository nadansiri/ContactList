import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./Components/ContactList";
import ContactElement from "./Components/ContactElement";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import SearchResults from "./Components/SearchResults";

function App() {
  //With axios
  const [contacts, setContacts] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  const [Search, setSearch] = useState("search"); //for filtering
  const filteredContact = (e) => {
    setSearch(e.target.value);
  };
  //
  const Add = (ob) => {
    setContacts([...contacts, ob]);
  };
  //
  const url = "http://localhost:5555/api/contact/all";
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log("response", response);
        if (response.data.length > 0) {
          setContacts(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(error);
      });
  }, [contacts]);
  return (
    <div className="App">
      <MyNavbar Add={Add} SearchBy={filteredContact}/>
      <h1>Contact List</h1>
      <hr />
      {/*<ContactList contact={contact} />*/}
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route exact path="/">
          <ContactList contact={contacts} Add={Add}/>
        </Route>
        {contacts.map((el) => (
          <Route path={`/api/contact/details/${el._id}`}>
            <ContactElement contactEl={el} />
          </Route>
        ))}
        <Route path={`/api/contact/search/`}>
            <SearchResults Search={Search}/>
          </Route>
      </Switch>
      <MyFooter />
    </div>
  );
}

export default App;
