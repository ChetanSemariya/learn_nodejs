/*

What is EJS Template :- Embedded Javascript Templating.This template is based on Javascript.EJS provide a clean and convenient way to create views in ExpressJs.

Benifits :- Create Dynamic and Reusable Templates

// -------------- EJS Template Tag Syntax ------------- //

1). <% %>  => control flow, no output i.e flow control krne k kaam mai aata hai
2). <%= %> => Outputs escaped value (Safe), yhh hume variable ki value show karwane ke kaam mai aata hai and XSS attacks se bhi bachata hai isly yhh secure hai

example :- 

<ul>
   <% for(let i=1; i<=3; i++) { %>
      <li>Item <%= i %></li>
   <% } %>
</ul>

output :- 

<ul>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>

3). <%- %>  => Outputs unescaped value (unsafe). unsafe because yhh hume xss attack se nahi bachata hai
4). <%# %> => Comment krne k liye iska use hota hai
5). <% -%> => Removes the following newline
6). <%_ %> => Removes whitespace before it. Starting se whitespace ko htane k liye iska use hota hai
7). <% _%> => Removes all whitespace after it. End mai whitespace ko hatane k liye iska use hota hai

*/

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

app.listen(3000, () => {
  console.log("Server started successfully on port : 3000");
});

/* --------- About.ejs file ------------- */

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title><%= title %></title>
//   </head>
//   <body>
//     <h1><%= title %></h1>

//     <% /* let items =['Apple','Banana','Cherry'] */ %>

//     <!-- this ul views from the index page -->
//     <!-- <ul>
//       <li><%= /* item */ _%></li>
//     </ul> -->

//     <table border="1" width="500px">
//       <% items.forEach(item => { %>
//       <tr>
//         <td><%= item.name _%></td>
//         <td><%= item.age _%></td>
//         <td><%= item.city _%></td>
//       </tr>
//       <% }) %>
//     </table>

//     <%/* if(message) { */%>
//     <p><%= /* message */ %></p>
//     <% /* } else { */%>
//     <!-- <span>There is no message</span> -->
//     <% /* } */ %>
//   </body>
// </html>

/* 

// ----------------------- EJS PARTIALS --------------- // 

=> Let suppose humare pass 2 file hai and dono files mai header footer include hai and usme same code likha hua hai i.e code is repetitive and isi repitition ko kam krne k liye hum ejs ke partials method ka use krte hai . Isme hum header or footer ki particular file bana lete hai and use include method ki help se load kara lete hai apni file mai jaha bhi iski jarurat hoti hai vaha.
*/
