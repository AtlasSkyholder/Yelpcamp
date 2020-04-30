require('dotenv').config();

const PORT = process.env.PORT || 8600;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connection");
const mongoose = require("mongoose");

const Camps = require("./db/schema");

connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

/* // SCHEMA SETUP
const campgroundSchema = mongoose.Schema({
  name:String,
  image:String
});

const Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
  {
    name: "Salmon Creek",
    image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"
  }, function(err, campground){
    if(err){
      console.log(err);
    } else {
      console.log("NEWLY CREATED CAMPGROUND: ");
      console.log(campground);
    }
  }); */


/* const campgrounds = [
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg"},
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg"},
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg"}
]; */

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
      res.render("campgrounds",{campgrounds:camps});
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
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
  //find the campground with provided ID
  //render show template with that campground
  res.send("THIS WILL BE THE SHOW PAGE ONE DAY!");
})

app.listen(PORT, process.env.IP, function(){
  console.log("The YelpCamp Server Has Started!");
});