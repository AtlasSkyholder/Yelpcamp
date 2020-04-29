const PORT = process.env.PORT || 8600;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connection");

connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const campgrounds = [
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg"},
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg"},
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg"}
];

app.get("/", function(req,res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){


  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
  const name = req.body.name;
  const image = req.body.image;
  let newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  res.redirect("campgrounds");
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(PORT, process.env.IP, function(){
  console.log("The YelpCamp Server Has Started!");
});