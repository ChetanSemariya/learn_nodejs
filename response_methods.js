/**

ExpressJs Response Methods :-

1). res.send() :- Iske andar hum given datatype ko client ke pass bhej sakte hain. Isme hum string, object, array, buffer, html, json, etc bhej sakte hain.
2). res.json() :- Isme hum json(Javascript Object Notation) data bhej sakte hain.
3). res.jsonp() :- Isme hum jsonp(Javascript Object Notation with Padding) data bhej sakte hain.Iska use specially vaha krte hai jaha alag alag origin se json ka data aaraha ho . It is less secure than json method and agar frr bhi hume iska use krna hai to iske liye hume cors name ka package use krna padta hai.
4). res.redirect() :- Isme hum url ko redirect kr sakte hain.
5).** res.render() :- Isme hum views ke data ko render kr sakte hain.(i.e poori html ki file ko hi render krna hoto iska use krte hain) open HTMl file using a template engine.
6). res.download() :- Isme hum kisi bhi file ko download kr sakte hain server se like PDF, Image, file, Music, Video, Excel etc
7). res.sendFile() :- Isme hum kisi bhi file ko send kr sakte hain server se like PDF, Image, file, Music, Video, Excel etc
8). res.end() :- Agar hume response ko end krna hai condition ke behalf pr to iss method ka use krte hain.
9). res.status() :- Isme hum status code ko set kr sakte hain.
10). res.sendStatus() :- Isme hum status code ko send kr sakte hain.
11). res.headersSent :- Yhh Basically yhh check krta hai ki response sent hua hai ya nahi.     
12). res.get() & res.set() :- Yhh basically ek variable ki tarah kaam krta hai value ko get and set krwane k liye

// -------------------- Redirection Code ------------------- //

1). code 301 :- A permanent redirect used when a resource has been moved to a new URL.
2). 302 :- A temporary redirect used when a resource has been temporarily moved to a new URL.
3). 303 :- A temporary redirect used after a POST or PUT operation. 
4). 307 :- A temporary redirect similar to 302, but better for sites with non-GET operations.  
5). 308 :- The permanent counterpart to the 307 redirect.

// -------------------- Server Status Codes ------------------- //

1). 200 - OK
2). 201 - Created 
3). 403 - Forbidden
4). 404 - Not Found
5). 500 - Internal Server Error
6). 503 - Service Unavailable
7). 504 - Gateway Timeout

// ------------------------ Practical Demonstration ------------------- //

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.set("view engine", "ejs"); // view engine set krna padta hai at the top mai hi.View engine mtlb jo html ko show krne k kaam mai aata hai

// app.get('/', (req, res) => {
// ------ send method with object ------- //

// res.send(
//     {
//         name:"chetan",
//         age:27,
//         city:"jaipur"
//     }
// );  // send object kr rahe hain but hume response milega json format mai

// ------ send method with array ------- //

// res.send(
//     ['apple', 'banana', 'cherry', 'dates'] // it returns an array
// );

// ------ json method ------- //

// res.json(
//     {
//         name:"chetan",
//         age:27,
//         city:"jaipur"
//     }
// )

// ------ Array with object Method ----- //
//     const users = [
//         {id:1, name:"chetan"},
//         {id:2, name:"Salman"},
//     ]

//     res.json(users);
// });


// ------ Json with padding method ------- //
app.get("/", (req, res) => {
  res.jsonp({ name: "chetan", age: 27, city: "jaipur" }); // yhh method hume second parameter mai ek callback function bhi return krta hai i.e agar humne route mai koi bhi parameter pass kiya hai toh vo callback function mai aajayega
});

// ------ Redirect Method ------- //
app.get("/about", (req, res) => {
  //   res.redirect(301, "https://www.google.com"); // here 301 is a status code for permanent redirecting the page
  // res.redirect('/user');

  /* ---- AGar back window open krna hoto back function ki help se krskte hai ya phir two dots ki help se */

res.redirect("back");
res.redirect("..");
// });

app.get("/user", (req, res) => {
  res.send("Hello from user page");
});

// ----------- Render Method ----------- //
// Note:- Isme hum poora html ko hi return krte hai.Express js mai humari html file ki extension hoti hai ejs.

app.get("/ejs", (req, res) => {
  res.render("user"); // render method sabse phle views name k folder mai jake user ki file ko check karega that this file exists it or not. Agar milti hai to return karega otherwise it will throw an error.
});

// ----------- Download Method --------------- //

app.get("/download", (req, res) => {
  res.download("./files/Average.pdf", "Document.pdf"); // agar hum file ka name kuch or rakhna chahte hai to use second parameter mai pass krskte hai and usi name se humari file download hogi.
});

// ----------- SendFile Method --------------- //

app.get("/download-through-send-method", (req, res) => {
  res.sendFile(__dirname + "/files/Average.pdf"); // forcefully download nahi krwata hai alag tab mai file ko open krdeta hai sendfile method
});

// ---------------- End Method -------------- //

app.get("/end", (req, res) => {
  res.write("I am writing");
  res.end(); // different ways mai response ko end krne k kaam mai aata hai end method
});

// ---------------- Send Status Method -------------- //

app.get("/error", (req, res) => {
  res.sendStatus(404);
});

// ---------------- Status Method -------------- //

// Note:- Agar status code k sath mai koi message bhi send krna hai to uske liye status method ka use krskte hai

app.get("/error-status", (req, res) => {
  res.status(200).send("success code");
});

// ---------------- HEADER SENT Method -------------- //

// NOTE:- Yhh method yhh check krta hai ki header se response send hua hai yaa nahi

app.get("/check", (req, res) => {
  console.log(res.headersSent);
  res.send("HEllo chetan");
  console.log(res.headersSent);
});

// ---------------- GET AND SET Method -------------- //

app.get("/set-data", (req, res) => {
  res.set("custom-header", "hellochetan");
  console.log(res.get("custom-header"));
  res.send("Header set successfully!");
});
