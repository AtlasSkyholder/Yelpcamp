# Yelpcamp

YelpCamp is a full stack web application built with Node.JS, Express and MongoDB.
YelpCamp allows users to List Camps with a price and description, edit those Camps and delete them. Users can register, login in and out, create comments, edit the comments and delete the comments they created. Users cannot delete or edit Campground listings or comment not belonging to them.

## Final Product

!["YelpCamp's landing page with a background image carrousel."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/landingPage.png?raw=true)

!["YelpCamp's Campground Listing page."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/indexPage.png?raw=true)

!["Example of a listed Campground."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/ListedCampground.png?raw=true)

!["YelpCamp page for creating a new Campground listing."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/createCampground.png?raw=true)

!["YelpCamp page for creating a new comment on an existing Campground listing."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/addComment.png?raw=true)

!["YelpCamp page for registering a new user."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/RegisterPage.png?raw=true)

!["YelpCamp page for logging in an existing user."](https://github.com/AtlasSkyholder/Yelpcamp/blob/master/docs/LoginPage.png?raw=true)

## Dependencies

- Node.JS
- Express
- Mongoose
- Passport
- dotenv
- ejs
- nodemon
- body-parser
- connect-flash
- method-override

## Getting Started

- First I recommend using version 12 of the YelpCamp project as it is the most up to date version.
- Second, a mongo database must be set up. I recommend creating an account at MongoDB Atlas, because a free database instance can be generated and it's fairly easy to connect it to the project.
- Inside the v12 folder, create a .env file and copy and paste into it, what's inside the .env.example file.
- Replace the placeholder text in the .env with the address to the mongoDB cluster, make sure you whitelist your IP address inside the MongoDB Atlas cluster or it will refuse to connect.
- Inside the v12 folder, install all dependencies using the `npm install` command.
- Run the development web server using the `npm start` command.
- It's set to run on PORT 8600.