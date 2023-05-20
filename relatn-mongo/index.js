//import modules
const express = require("express");
const { default: mongoose } = require("mongoose");
const { CarModel } = require("./Models/carModel");
const { userModel } = require("./Models/userModal");

//db connection
mongoose
  .connect("mongodb://localhost:27017/Playground")
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

//initiate app
const app = express();

//express middleware
app.use(express.json());

//gets all cars
app.get("/:id", async (req, res) => {
  try {
    const allCars = await CarModel.findById(req.params.id).populate(
      "User",
      "-_id -__v"
    );
    console.log(allCars);
    if (allCars) {
      res.send(allCars);
    }
  } catch (e) {
    res.send(e);
  }
});

//post cars
app.post("/", async (req, res) => {
  try {
    const car = await CarModel.insertMany([req.body]);
    res.send(car);
  } catch (e) {
    res.send(e);
  }
});

//post user
app.post("/user", async (req, res) => {
  try {
    const user = await userModel.insertMany([req.body]);
    res.send(user);
  } catch (e) {
    res.send(e);
  }
});

//listens to port
app.listen(3000, () => {
  console.log("server up and running on port 3000");
});
