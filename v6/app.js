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

const seedDB = require("./seeds");

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

app.get("/", function(req,res){
  res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
  // Get all camopgrounds from DB
  Camps.find({}, function(err, camps){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index",{campgrounds:camps});
    }
  });
});

//CREATE - add new campgrounds to database
app.post("/campgrounds", function(req, res){
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  let newCampground = {name: name, image: image, description: description};

  //.save to database
  const newCamp = new Camps(newCampground);
  
  // created and saved c campground to the database
  newCamp.save((error) => {
    if (error) {
      console.log('Ooops, something went wrong.');
    } else {
      console.log('Data has been saved!!');
      res.redirect("campgrounds");
    }
  });
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("campgrounds/new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
  //find the campground with provided ID
  Camps.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      //render show template with that campground

      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});


// ======================
// COMMENTS ROUTES
// ======================

app.get("/campgrounds/:id/comments/new", function(req, res){
  // find campground by id
  Camps.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
    } else {
      res.render("comments/new", {campground: campground});
    }
  });
});

app.post("/campgrounds/:id/comments", function(req, res){
  //lookup campground using ID
  Camps.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create(req.body.comment, function(err, comment){
        if(err){
          console.log(err);
        } else {
          campground.comments.push(comment);
          campground.save();
          res.redirect("/campgrounds/" + campground._id);
        }
      });
    }
  });
  //create new comment
  //connet new comment to campground
  //redirect campground show page
});

//  ==================
//  AUTH ROUTES
//  ==================

// show register form
app.get("/register", function(req, res){
  res.render("register");
});

//handle sign up logic
app.post("/register", function(req, res){
  const newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/campgrounds");
    });
  });
});

// show login form
app.get("/login", function(req, res){
  res.render("login");
});

//handling login logic
app.post("/login", passport.authenticate("local",
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res){
  
});

app.listen(PORT, process.env.IP, function(){
  console.log("The YelpCamp Server Has Started!");
});