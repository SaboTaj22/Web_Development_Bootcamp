//jshint esversion:6
//need this to use const without jshint creating an error.
//To use nodemon: nodemon server.js


const express = require("express"); //how to require express

const app = express(); // create new const called app (function that represents express module)

app.get("/", function(request, response){
    response.send("<h1>Hello, world!</h1>"); 
}); 
// This is a method provided by express that specificies what should happen when a browser gets in touch with our server and makes get request to home root
// call back function tells server what to do when it happens

app.get("/contact", function(request, response){ // targeting the contact route rather than home route
    response.send("Contact me at: taj.poulsen@gmail.com");
});

app.get("/about", function(request, response){ // targets the about route 
    response.send("I'm the f#$%ing man, y'all don't get it, do ya?");
});

app.get("/hobbies", function(request, response){
    response.send("<ul><li>Code</li><li>Investing</li><li>Art</li></ul>");
});

app.listen(3000, function() { // listens on a specific port for any http requests that get sent to our server
    console.log("Server started on port 3000"); // call back function that enables us to see when our port is set up and running
}); 

