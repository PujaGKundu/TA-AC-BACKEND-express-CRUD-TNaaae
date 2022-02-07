var express = require("express");
var router = express.Router();

//User Routes
//Creating new User
router.get("/new", (req, res) => {
  res.render("userForm");
});

//Saving data
router.post("/", (req, res) => {
  res.send(req.body);
});

//fetch the User
router.get("/", (req, res) => {});

//fetch only one User
router.get("/:id", (req, res) => {});

//updating User form
router.get("/:id/edit", (req, res) => {});

//update User
router.put("/:id", (req, res) => {});

//delete User
router.delete("/:id", (req, res) => {});

module.exports = router;
