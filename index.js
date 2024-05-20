// IMPORTING DEPENDENCIES

const express = require("express");// FOR POSTING
const mongoose = require("mongoose");// FOR MONGODB
const path = require("path");// FOR  PUG
// const passport = require("passport"); 


require("dotenv").config();

// Importing routes
const babyRegistrationRoutes = require("./routes/babyRegistrationRoutes") ;
const sitterRegistrationRoutes = require("./routes/sitterRegistrationRoutes");
const signupRoutes = require("./routes/signupRoutes");
const dollstoreRoutes = require("./routes/dollstoreRoutes");

// // INSTANTIATIONS

const app = express();

// CONFIGURATIONS

 mongoose.connect(process.env.DATABASE,{
   useNewUrlParser:true,
   useUnifiedTopology:true,
  });
 mongoose.connection
 .once("open", ()=>{
   console.log("Mongoose connection successful");
  })
  .on("error", err => {
   console.log(`Connection error: ${err.message}`);
 });

 app.set("view engine","pug");//setting the view engine tp pug
 app.set("views", path.join(__dirname, "views"));//specify the directory where the views are found

// MIDDLEWARE

app.use(express.static(path.join(__dirname, "public")));//set directory for static files
app.use(express.urlencoded({extended:true}));
app.use(express.json());// return data in the response path

// // ROUTES - end points of our server
app.get("/", (req,res)=>{
  res.render("index");
});

app.get("/programs", (req,res)=>{
  res.render("programs");
});

app.get("/contact", (req,res)=>{
  res.render("contact");
});

app.get("/enroll", (req,res)=>{
  res.render("enroll");
});

app.get("/admin", (req,res)=>{
  res.render("login_page");
});


// use imported routes 

app.use("/", babyRegistrationRoutes);
app.use("/", sitterRegistrationRoutes);
app.use("/", signupRoutes);
app.use("/", dollstoreRoutes);



// FOR INVALID ROUTES

app.get("*", (req, res) => {
  res.send("404! This is an invalid URL");
});

// BOOTSTRAPPPING THE SERVER this must be the last line in the code

app.listen(3000, () => console.log("listening on port 3000")); // this is where the server port is set
