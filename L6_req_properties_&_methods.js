/*
There are several properties and methods which are used by ExpressJs, there names are given below :- 

Most Important Properties :-

1). req.params :- Route params se data ko fetch krne k liye iska use hota hai
2). req.query :- Route params se query parameter ko fetch krne k liye iska use hota hai.
3). req.body :- isme hum json mai yaa phir form data mai data ko send krskte hai
4). req.cookies :- Iska use server pr temporary data store krne k liye hota hai

Other Properties :- 

5). req.hostname
6). req.ip
7). req.ips
8). req.method
9). req.originalUrl
10). req.path
11). req.protocol
12). req.secure
13). req.route

// ---------- Methods Used by ExpressJs ------------ //       

1). req.accepts : Iski help se hum yhh pata krskte hai ki User se kis format mai data aaraha hai HTML, Json or XML and agr data json mai aaraha hai to response bhi Json mai hi send karenge
2). req.get :- Server se related koi information chahiye to iss method ka use krte hai 
3). req.is :- Iski help se hum yh check krskte hai ki user ki request kis format mai hai Json, form data or Plain text.
4). req.range :- It is used in very large data types

*/

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.set("view engine", "ejs"); // view engine set krna padta hai at the top mai hi.View engine mtlb jo html ko show krne k kaam mai aata hai
app.use(express.json()); // Iska mtlb hai ki mera express ka code json mai data accept krskta hai.It is a kind of middleware
app.use(express.urlencoded({ extended: false })); // jo humari app hai vo form data bhi accept krskti hai

// ---------------- Request Body Method -------------- //

// => Server se jo bhi data aata hai use read krne k liye req.body method ka use krte hai
app.post("/about", (req, res) => {
  res.send(req.body);
});

// -------------- HostName Method -------------------- //
// => It returns host details i.e kiss host se humara data aaraha hai

app.get("/get-host", (req, res) => {
  res.send(req.hostname);
});

// -------------- IP Method -------------------- //

// => It returns IP address

app.get("/get-ip", (req, res) => {
  res.send(req.ip);
});

// -------------- IPs Method -------------------- //

// => It returns multiple IPs address agar humne multiple ips le rakhe hai to

app.get("/get-ips", (req, res) => {
  res.send(req.ips);
});

// -------------- Request Method -------------------- //

// => Yhh hume yhh check krke batata hai ki current route ki request kis type of method mai hai either GEt, Post, Put, Patch, Delete

app.get("/get-method", (req, res) => {
  res.send(req.method);
});

// -------------- Original URL Method -------------------- //

// => Yhh hume hostname ke baad ka poora path return krta hai i.e it returns our route name and query parameter also

app.get("/original-url", (req, res) => {
  res.send(req.originalUrl);
});

// -------------- Path Method -------------------- //

// => It is working same as original Url method but the only difference is that Yhh hume hostname ke baad ka poora path return nahi krta hai i.e it returns only route name and query parameter return nahi krti hai.

app.get("/path-url", (req, res) => {
  res.send(req.path);
});

// -------------- Protocol Method -------------------- //

// => It is check the protocol whether it is http or https

app.get("/protocol", (req, res) => {
  res.send(req.protocol);
});

// -------------- Secure Method -------------------- //

// => Agar hum secure protocol use krte hai then it return true otherwise it return false.

app.get("/secure-protocol", (req, res) => {
  res.send(req.secure);
});

// -------------- Route Method -------------------- //

// => To check the route details.

app.get("/route-method/:userId", (req, res) => {
  res.send(req.route);
});

// --------------- Express Js Accept Method ------------- //

app.get("/accept", (req, res) => {
  if (req.accepts("html")) {
    res.send("<h1>Hello Html</h1>");
  } else if (req.accepts("json")) {
    res.send("<h1>Hello Json</h1>");
  } else if (req.accepts("xml")) {
    res.send("<h1>Hello XML</h1>");
  } else {
    res.send("Content type is not supported");
  }
});

// --------------- Headers Method ------------- //

// => Jis bhi server pr humari req gye hai uski poori information deta hai headers method and agar hume headers ki sub specific details chahiye to uske liye hum get method ka use krskte hai

app.get("/headers", (req, res) => {
  //   res.send(req.headers);
  //   res.send(req.headers.connection); // check sub information of the headers

  // yahi work hum get method ki help se bhi krskte hai
  //   res.send(req.get("host"));
  //   res.send(req.get("connection"));
  res.send(req.get("accept"));
});

// ------------------ Is Method ------------------ //

// => Same work as accept method isme hum yhh check krte hai ki jo bhi information bheji hai user ne vo kiss format mai hai json mai hai html mai hai or xml mai hai.

app.post("/is-method", (req, res) => {
  if (req.is("application/json")) {
    res.send("Valid Json Data");
  } else if (req.is("text/html")) {
    res.send("Html Data");
  } else {
    res.status(400).send("Unsupported Content-type");
  }
});
