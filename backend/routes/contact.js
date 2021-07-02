const express = require("express");
const contactRoute = express.Router();
//Import our model
const Contact = require("../models/Contact");

contactRoute.get("/", (req, res) => {
  res.send("<h1>Welcome to the contact Route! :D </h1><hr>");
});
//GET :  RETURN ALL CONTACTS
contactRoute.get("/all", (req, res) => {
  Contact.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//GET :  RETURN CONTACT
contactRoute.get("/search/:searchKey", (req, res) => {
  const searchBy = req.params.searchKey;
  Contact.find().or([
    {firstName:searchBy},
    {lastName:searchBy},
    {email:searchBy},
    //{_id:searchBy},
  ]).exec()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//POST :  ADD A NEW CONTACT
contactRoute.post("/new", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = Number(req.body.phone);

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phone,
  });

  newContact
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//PUT : EDIT BY ID
contactRoute.put("/update/:id", function (req, res) {
  const contactID = req.params.id;
  const update = req.body;
  Contact.findByIdAndUpdate(contactID, update, { new: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//DELETE : REMOVE BY ID
contactRoute.delete("/remove/:id", function (req, res) {
  const removedID = req.params.id;
  Contact.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
module.exports = contactRoute;
