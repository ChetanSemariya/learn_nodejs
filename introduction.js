/*

NodeJs :- Node js is an open source, cross platform "Javascript Runtime environment" that allows you to run javascript code outside a web browser. It was created by Ryan Dhal in May 2009.

Client Side Scripts : JO only humare system pr hi run hoti hai. ex:- Html, CSS, Javascript

Server Side Scripts : Jo server pr run hoti hai for instance :-

=> PHP, ASP.net, python, Go, NodeJs

Note:- Javascript only client side pr hi run hoti hai but with the help of NodeJs yhh hume aisa environment deta hai jisse hum javascript ko server pr bhi run krskte hai.

USES => 

1). For creating web Apps
2). Creating API's

Node Js is based on Technology => Chrome V8 Javascript Engine that why it is 
=> Faster
=> Lightweight
=> Efficient
=> Scalable

************* Use of NodeJs **********

1). CMS(Content Management System)
2). ERP(Enterprise Resource Planning)
3). CRM(Customer Relationship Management)
4). Mail Server
5). Real Time Application : Chatting System, Online Games
6). File Storage System
7). Command Line Tools
8). Backend for Mobile Apps
9). Streaming Data : Video Streaming, Audio Streaming, and processing sensor data from IOT Devices


************ Benifits of NodeJs *************

1). Performance : V8 engine and non-blocking I/O make it very fast and efficient
2). Scalability : Easily handles a large number of concurrent connections
3). Full stack Javascript : Developers can use Javascript for both the front-end and back-end which reduces context swithing and improves development speed.
4). Large Ecosystem : NPM provides a vast collection of libraries and tools
5). Community : A large and active community provides support, resources and open-source contribution
6). Real-Time Capabilities : Excellent for building real time applications
7). Easy to Learn : If you already know Javascript the learning curve for NodeJs is relatively gentle
8). Cost-Effective : Can often reduce Infrastructure costs due to its efficient resource utilization.


**************************** About ExpressJs *************************** 

ExpressJs :- Expressjs is a fast, minimal and flexible web framework for Nodejs that simplifies building web applications and APIs in a more structured and organized way.

What is web Framework ?
=> Web framework are sets of pre-written code and libraries that provides a foundation for developing software applications. ex- node modules

Pre-written code and library :-
a). Tools
b). Components
c). Modules

//----------- Examples of Components ----------//

1). Database Component
2). Caching
3). Pagination
4). Session Management
5). Form Handling
6). Security Mechanism
7). User Authentication
8). APIs
9). Payment Gateways

//---------- Benifits ----------- //

1). Code organization
2). Reusablility
3). Standardization
4). Testing & debugging support
5). Community and support


************* Types of Frameworks ************

a). Opinionated Framework :- Have a defined structure and organized MVC, MVVM etc. But it has a disadvantage that it is not flexible bcz ti follow strict rules

Example :- Ruby on Rails (Ruby)
=> Django(Python)
=> Spring Boot(Java)
=> Laravel (PHP)

b). Unopinionated Framework :- No strict rules or predefined workflow.Ise Mvc se bhi use krskte hai or MVVM bhi use krskte hai yaa jaise hum chahe vese

Example :- Express.js(NodeJs)
=> Flask (python)
=> FastAPI(Python)
=> Koa.js(Node.js)
=> React.js

Commands : 

1). npm init -y => 
It will create a package.json file in your project and it will have all the information about your project like name, version, description, entry point, scripts etc. here npm is a node package manager and init is a command to initialize a new project and -y is a flag to create a default package.json file without asking any questions agar hum -y nhi use krte toh yeh humse kuch questions puchta hai jaise name, version, description etc.
2). npm install express => It will install express.js in your project. Here npm is a node package manager and install is a command to install a package and express is the package name that we want to install.
3). npm install nodemon => It will install nodemon in your project. Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Here npm is a node package manager and install is a command to install a package and nodemon is the package name that we want to install.  

//----------- Express.js Basic Structure and how it works ------------//

=> Express.js is a minimal and flexible Node.js web application framework that p`rovides a robust set of features for web and mobile applications. It is an open-source framework developed and maintained by the Node.js foundation.
=> Now let suppose agar user koi request bhejta hai toh express.js us request ko handle krta hai and then us request ko handle krne ke baad response bhejta hai. Express.js is a middleware that helps in managing the flow of data between the server and the database.
and yhh response user ki request ke behalf pr bhejta hai and then user ko response milta hai.

//----------- How to use Express.js ------------//

const express = require('express'); // here require is a function that is used to import the express module in our project. Express is a function that is used to create an express application. ek baar ise load krne ke baad hum express() function ko use krke ise pooori application mai use kr skte hai.
const app = express(); // here express is used as a class and app is an object of express class. app is used to create an express application. yeh app object ek express application ko represent krta hai.

// ------------ How to create a server in Express.js ------------//

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); // here listen() is a function that is used to bind and listen the connections on the specified host and port. It is used to start the server. yeh function ek port number pr server ko bind krta hai and then server ko start krta hai. yeh function 2 arguments leta hai ek port number and ek callback function. callback function tab call hoti hai jab server successfully start ho jata hai.

Note:- First parameter is port number and yhh different bhi hoskta hai like as 4000, 5000 etc and second parameter is a callback function that is called when the server is started successfully.
Purpose => User ki HTTP Request ko read krne k kaam mai aata hai.

// ------------ User HTTP Request in Express.js ------------//

http://localhost:3000/ => It is a URL that is used to send a request to the server. Here localhost is a hostname and 3000 is a port number. jab hum yeh URL open krte hai toh yeh request server pr bhejti hai.Here "/" is home page route
http://localhost:3000/about
http://localhost:3000/gallery

// ------------ Route in Express.js ------------//

=> Jab bhi user url pr hit krta hai to humare request route pr jaati hai, jaha pr ise hum handle krte hai.

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
}); // here get() is a function that is used to handle the get request. It is used to send the response to the client. yeh function 2 arguments leta hai ek route and ek callback function. callback function tab call hoti hai jab user ki request route pr hit hoti hai.


//------------Why use Nodemon in NodeJs ------------//

Nodemon => Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. It is a command-line interface (CLI) utility that monitors for any changes in your source and automatically restarts your server. It is an open-source tool that is available on npm. Nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
*/
