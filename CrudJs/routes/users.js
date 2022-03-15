const { request } = require("express");
const express = require("express");
const User = require("../models/users");

const router = express.Router();

//all routes over here are starting with /users
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.send("Could Not found");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.send("Could Not delete");
  }
});
router.patch("/:id", async (req, res) => {
  const user = req.body;

  //Saving the user details in database
  try {
    const savedData = await User.findOneAndUpdate({ _id: req.params.id }, user);
    res.status(200).json({
      message: "User Updated Succesfully",
      user: savedData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  //Saving the user details in database
  try {
    const savedData = await user.save();
    res.status(200).json({
      message: "User Created Succesfully",
      user: savedData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
});

module.exports = router;
