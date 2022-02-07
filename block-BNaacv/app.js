//require
var express = require("express");
var path = require("path");
var userRouter = require("./routes/users");

//instance the app
var app = express();

//set up template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routing middleware
app.use("/users", userRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

//listener
app.listen(3000, () => {
  console.log("Server listening to port 3k");
});
