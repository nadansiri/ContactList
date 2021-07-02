const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');
const app = express();

//Configure the environment variables with .env
require("dotenv").config();
const port = process.env.PORT||4444;
const dbURI = process.env.URI;

//Connect to mongoDB
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => console.log("connected successfully"))
  .catch((err) => console.log(err));

//********************************************************************** */

mongoose.set("useFindAndModify", false);
app.use(express.json());
app.use(cors());
//********************************************************************** */

const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

app.get("*", function (req, res) {
  res.send("<h1>Contact List</h1><hr>");
});

app.listen(port, function () {
  console.log("The server is running at port: " + port);
});
