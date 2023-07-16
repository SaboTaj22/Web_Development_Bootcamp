// (base) tajpoulsen@Tajs-MBP ~ % cd desktop
// (base) tajpoulsen@Tajs-MBP desktop % mkdir Calculator
// (base) tajpoulsen@Tajs-MBP desktop % cd Calculator
// (base) tajpoulsen@Tajs-MBP Calculator % touch calculator.js
// (base) tajpoulsen@Tajs-MBP Calculator % npm init
// Fill out information for package.json
// Open project file in an editor
// (base) tajpoulsen@Tajs-MBP Calculator % npm install express (Installs express)
// Require express using: const express = require("express");
// Add comment if needed: jshint esversion:6
// Set up express: const express = require("express"); 
// Create a root route get method with app.get(): app.get("/", function(request, response){
// Send the words Hello World from the route as the response: response.send("Hello World!");
// *Spin up our server on port 3000 with app.listen: 
// Run server with nodemon: nodemon calculator.js

const express = require("express"); 
const bodyParser = require("body-parser"); // require bodyParser

const app = express(); 
app.use(bodyParser.urlencoded({extended: true})); // allows us to use bodyparser and post nested objects

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html"); // Connect whole file to server. Gives file path no matter where it's hosted
});
// __dirname is a constant that allows us to grab the current files location at any given time
app.post("/", function(request, response){ // allows user to interact with our website

var num1 = Number(request.body.n1); //Must use Number to convert text to number!
var num2 = Number(request.body.n2); 

var result = num1 + num2;

response.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(request, response){
    var weight = parseFloat(request.body.weight);
    var height = parseFloat(request.body.height);

    var bmi = weight / (height * height); 

    response.send("Your BMI is " + bmi)
});

app.listen(3000, function(){ // see line * for what this does
    console.log("Server is running on port 3000."); 
});




