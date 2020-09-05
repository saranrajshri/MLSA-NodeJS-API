var express = require("express");
var app = express();

app.use(express.json());

// Database
var database = [
  {
    name: "Harry Potter",
    author: " JK rowling",
  },
  {
    name: "Wings of fire",
    author: "APJ",
  },
];

// http://localhost:3000/getAllBooks

// Routes
app.get("/getAllBooks", function (req, res) {
  res.send(database);
});

// Find a specific book
// ex - http://localhost:3000/findABook/Harry Potter

app.get("/findABook/:bookName", function (req, res) {
  var bookToFind = req.params.bookName;

  var result = database.find(function (book) {
    return book.name == bookToFind;
  });

  res.send(result);
});

// Add a book
app.post("/addBook", function (req, res) {
  var newBook = req.body;
  database.push(newBook);

  res.send(database);
});

// Run the server
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server running");
});
