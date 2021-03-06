require('dotenv').config();

const PORT = process.env.PORT || 8600;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connection");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Camps = require("./models/campground");
const Comment = require("./models/comment");
const User = require("./models/user");

//const seedDB = require("./seeds");  //seed the database

//requiring routes
const commentRoutes = require("./routes/comments");
const campgroundRoutes = require("./routes/campgrounds");
const indexRoutes = require("./routes/index");

connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Porche 911 Carrera is a sexy car.",  //random made phrase used for salting the password
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for passing user info to header
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



app.listen(PORT, process.env.IP, function(){
  console.log("The YelpCamp Server Has Started!");
});