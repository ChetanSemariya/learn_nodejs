// const express = require('express') // old way to import express

import express from "express"; // new way to import the express in javascript es6
const app = express();

app.set("view engine", "ejs"); // it is used as an middleware

// Note :- ByDefault ejs ki html files hum views name k folder mai likhte hai and agar humne views name ka folder nahi banaya hai to koi or name ko hume define krna padta hai kuch iss tarah se

app.use(express.urlencoded({ extended: false })); // Note:- Server per se form ki value ko accept krne k liye iss middleware ka use krna padta hai and iski value ko false set krna hota hai
app.use(express.static('public')); // it act as a middleware and iska use hum isly krte hai qk agar hume koi static file lagani hai like as css ki file and js ki file, express js mai to isi ki help se lagayenge otherwise it will not work. Here public is our folder name jaha pr humare static files rakhi hui hai

// app.set("views", "./my-template"); // here my-template is our views folder name. agar humare folder ka name views nahi hai too for ejs and here views is key.

app.get("/", (req, res) => {
  res.send("home page");
});

/* ---------- Ejs route ----------- */
app.get("/about-us", (req, res) => {
  // render array
  // let items = ["-Apple", "Banana", "Cherry", "Grapes"];

  // render array of objects
  var users = [
    { name: "Akshay kumar", age: 25, city: "Delhi" },
    { name: "Akshay Khanna", age: 25, city: "Mumbai" },
    { name: "Akshay sen", age: 25, city: "Goa" },
    { name: "Akshay patidar", age: 25, city: "Lucknow" },
  ];

  res.render("about", {
    title: "About page from index page",
    message: "Welcome to Ejs!",
    items: users,
  });
});

/* ---------- Form routes -------------- */
app.get("/form", (req, res) => {
  res.render("form", {title: "About page from index page", message: null });
});

app.post("/submit", (req, res) => {
  const name = req.body.myname;

  const message = `Hello , ${name} you submitted this form.`;
  res.render("form", { message: message });
});

app.listen(3000, () => {
  console.log("Server started successfully on port : 3000");
});
