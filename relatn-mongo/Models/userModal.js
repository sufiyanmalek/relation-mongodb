//import modules
const mongoose = require("mongoose");

//user Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
