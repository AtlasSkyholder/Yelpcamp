const PORT = process.env.PORT || 8600;

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  const campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e507441722673d19f4ec1_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507441722673d19f4ec1_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e507441722673d19f4ec1_340.jpg"}
  ];

  res.render("campgrounds");
});

app.listen(PORT, process.env.IP, function(){
  console.log("The YelpCamp Server Has Started!");
});