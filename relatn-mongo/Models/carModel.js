//import modules
const mongoose = require("mongoose");

//carSchema
const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  colors: [
    {
      type: String,
      required: true,
    },
  ],
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

//create model car collection
const CarModel = mongoose.model("car", carSchema);

module.exports = { CarModel };
