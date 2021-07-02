let mongoose = require("mongoose");
let contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  //interests: { type: [String] }
},{timestamps: true});
module.exports = mongoose.model("Contact", contactSchema);
