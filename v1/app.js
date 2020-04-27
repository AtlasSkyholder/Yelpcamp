const PORT = process.env.PORT || 8600;

const express = require("express");
const app = express();

app.get("/", function(req,res){
  res.send("this will be the landing page sooon!");
})
app.listen(PORT, process.env.IP, function(){
  console.log("The YelpCamp Server Has Started!");
});