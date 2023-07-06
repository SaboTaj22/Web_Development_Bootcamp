// ***Functions***

// Creating function 
// Using console.log instead of alert makes it so you don't have to click through a million alerts.
// It also moves everthing into the console so you can see the results
function getMilk(){
    console.log(leavehouse)
    console.log(moveup)
    console.log(etc)
}

// Calling function
getMilk();

// Moving the robot to the end
function main(){
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    turnLeft();
    turnLeft();
    turnLeft();
    move();
 }


//  Moving robot to the end with beepers
function main(){
    putBeeper();
    diagnalMoveAndBeeper();
    diagnalMoveAndBeeper();
    diagnalMoveAndBeeper();
    diagnalMoveAndBeeper();
 }

 function diagnalMoveAndBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }

//  Parameters and Arguments
 function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy" + bottles + "bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  getMilk(2);

// This code is going to buy 2 bottles of milk

// Using Money instead
function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5); // Used floor division to round down to whole #
    console.log("buy" + numberOfBottles + "bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  getMilk(5); 

//   ***CHALLENGE***
//   In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
//   It will take your current age as the input and console.logs a message with our time left in this format:
//   You have x days, y weeks, and z months left.
//   Where x, y and z are replaced with the actual calculated numbers.
  
//   For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
  
//   IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.
  
//   Example Input
  
//   e.g. If you are 56 years old:
  
//   lifeInWeeks(56)
//   Example Output
  
//   You have 12410 days, 1768 weeks, and 408 months left.
//   Hint
  
//   Try using this Repl.it playground to test your code and see if the output is what you expect it to be.
  
//   Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, commas and full stops.

  function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        var yearsRemaining = 90 - age;
        var days = yearsRemaining * 365; 
        var weeks = yearsRemaining * 52;
        var months = yearsRemaining * 12;
        
        console.log("You have " + days +" days, " + weeks + " weeks, and " + months + " months left. ");
        
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(25);

    // ***Outputs and return  values***
    function getMilk(money) {   
        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
        console.log("moveRight");
        var numberOfBottles = Math.floor(money / 1.5); // Used floor division to round down to whole #
        console.log("buy" + numberOfBottles + "bottles of milk");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("enterHouse");

        return calcChange(money, costPerBottle);
    }
    function calcBottles(startingMoney, costPerBottle) {
     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
    }
    function calcChange(startingAmount, costPerBottle) {
        var change = startingAmount % costPerBottle;
        return change;
    }

    console.log("Hello master, here is your " + getMilk(10, 3) + " change.");


// ***BMI Calculator***

// Create a BMI calculator using JavaScript functions. 

// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

// You can calculate it using the formula below, where weight divided by height squared.

// Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.

// The first parameter should be the weight and the second should be the height.

// NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);