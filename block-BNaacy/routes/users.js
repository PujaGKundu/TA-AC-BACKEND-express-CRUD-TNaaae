var express = require("express");
var router = express.Router();
var User = require("../models/user");

//user Routes
//Creating new user
router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

//Saving data
router.post("/", (req, res, next) => {
  User.create(req.body, (err, createduser) => {
    if (err) {
      return next(err);
    }
    res.redirect("/users");
  });
});

//fetch the user
router.get("/", (req, res) => {
  res.render("users.ejs");
});

//fetch only one user
router.get("/:id", (req, res) => {
  res.render("singleUser.ejs");
});

//updating user form
router.get("/:id/edit", (req, res) => {});

//update user
router.put("/:id", (req, res) => {});

//delete user
router.delete("/:id", (req, res) => {});

module.exports = router;
