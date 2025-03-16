/**

ExpressJs Routes :- 

1. Routes are used to determine the specific behavior of the application based on the request URL and HTTP method.
2. Routes are used to perform different types of operations based on the request URL and HTTP method.(GET,POST,PUT,DELETE,PATCH)

Types of Routes in express.js :- 

https://localhost:3000/ 
https://localhost:3000/about => url mai sabhi ko about dikehga but background mai koi or hi file run hogi ie security feauture
https://localhost:3000/about/user => Nested Routes
https://localhost:3000/about/user/1 => Route Parameters
https://localhost:3000/about/user/yahooBaba/rollno/12 => Nested Routes with Route Parameters
https://localhost:3000/search?name=chetansemariya&age=21 => Query Parameters


// ------------------ Basic Routes in NodeJs ------------------ //
app.get('/', (req, res) => {
    res.send('Hello World from node home page');    
    // res.send('<h2>Hello World from node home page I am writing a script</h2>'); // iske andar hum html bhi likh sakte hain
});

app.get('/about', (req, res) => {
    res.send("Hello from about page");
});

app.get('/gallery', (req, res) => {
    res.send("Hello from gallery page");
});

// sub routes
app.get('/about/user', (req, res) => {
    res.send("Hello from subroute page");
});

// random routes
app.get('/random.text', (req, res) => {
    res.send("Hello from random page I am here");
});

// ------------------ Pass Value Through Route Parameters ------------------ //

app.get('/user/:userId', (req, res) => { // here userId is used to accept a parameter
    res.send(req.params); // this will return the object of the parameter, jo bhi hum route mai value bhejenge vo params mai aajayega
});

app.get("/about/:id", (req, res) => {
    res.send(req.params); // it return all the data in json format
});

// ------------------ Nested Routes with Route Parameters ------------------ //

// app.get('/user/:userId/book/:bookId', (req, res) => [
//     // res.send(req.params)
//     // res.send(req.params.userId) // agar hume sirf specific paramter chahiye toh hum is tarah se bhi access kar sakte hain
//     res.send("Book Id : "+ req.params.bookId)
// ]);

// we can write also like that 
app.get('/user/:userId-:bookId', (req, res) => {
    res.send(req.params)
});

// ------------------ Query Parameters Routes ------------------ //     

app.get('/search', (req, res) => {
    // res.send(req.query);  // req.query is used to get the query parameters

    const name = req.query.name;
    const age = req.query.age;

    res.send(`Search results for Name : ${name} , Age : ${age}`);


    // Note:- Agar request parameters mai se koi bhi individual value nikalna chahte hai to iss tarah se krskte hai
});

 */
