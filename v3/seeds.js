const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment   = require("./models/comment");
 
const seeds = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name: "Hippie Flats",
      image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg",
      description: "Cool place, bring you 60's van and join a friendly community were we enjoy nature while living off it!!"
    },
    {
      name: "Firepit camp",
      image: "https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
      description: "This place has awesome night activities, great firepits for BBQs. Don't forget to bring your meat and beer!!"
    },
    {
      name: "Shallow Lake Camp",
      image: "https://cdn.pixabay.com/photo/2019/06/28/03/07/camping-4303359_960_720.jpg",
      description: "Great camping area for families and pets. The water is clear, and the lake is shallow making it safe for children and pets to play around. Don't expect much fish though. The sundown is breathtaking."
    },
    {
      name: "Aurora Camp",
      image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg",
      description: "Like the name implies, you get a great show at night time, the Aurora Borealis stretches as far as the eye can see. It gets really cold so please bring a lot of warm clothing and a good tent."
    }
];
 
async function seedDB(){
   //Remove all campgrounds
   await Campground.deleteMany({});
   await Comment.deleteMany({});
             //add a few campgrounds

  for (const seed of seeds) {
    let campground = await Campground.create(seed);
    let comment = await Comment.create(
      {
          text: "This place is great, but I wish there was internet",
          author: "Homer"
      });
      campground.comments.push(comment);
      campground.save();
  }
 
}
 
module.exports = seedDB;