const express = require("express");
const router = express.Router();
const Camps = require("../models/campground");

//INDEX - show all campgrounds
router.get("/", function(req, res){
  // Get all campgrounds from DB
  Camps.find({}, function(err, camps){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index",{campgrounds:camps, currentUser: req.user});
    }
  });
});

//CREATE - add new campgrounds to database
router.post("/", function(req, res){
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
router.get("/new", function(req, res){
  res.render("campgrounds/new");
});

//SHOW - shows more info about one campground
router.get("/:id", function(req, res){
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

module.exports = router;