// const express = require('express') // old way to import express

import express from "express"; // new way to import the express in javascript es6
const app = express();

app.set("view engine", "ejs"); // it is used as an middleware

// Note :- ByDefault ejs ki html files hum views name k folder mai likhte hai and agar humne views name ka folder nahi banaya hai to koi or name ko hume define krna padta hai kuch iss tarah se

// app.set("views", "./my-template"); // here my-template is our views folder name. agar humare folder ka name views nahi hai too for ejs and here views is key.

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about-us", (req, res) => {
  res.render("about", {
    title: "About page from index page",
    message: "Welcome to Ejs!",
  });
});

app.listen(3000, () => {
  console.log("Server started successfully on port : 3000");
});
