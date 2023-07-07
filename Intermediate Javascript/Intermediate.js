// ***Random Number Generation in Javascript***

// Random Number generation:
var n = Math.random(); // creates floating point number, can be scaled up. 
n = Math.floor(n * 6) + 1; //generates numbers 1-6 to simulate dice roll
console.log(n); 


// Love Calculator
prompt("What is your name?") // These are in here just for fun
prompt("What is their name?")

var loveScore = Math.random() * 100; 
loveScore = Math.floor(loveScore) + 1; 
console.log(loveScore);
alert("Your love score is " + loveScore + "%");

// ***Control Flow***
// if (track === "clear") {
//     gostraight();
// } else {
//     turnRight(); 
// }

prompt("What is your name?") // These are in here just for fun
prompt("What is their name?")

var loveScore = Math.random() * 100; 
loveScore = Math.floor(loveScore) + 1; 
console.log(loveScore);

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + " It's true love!");
} 
if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%"); 
}
if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + "You got together like oil and water.");
}

// ***Comparators and Equality***
// === Is equal to 
// !== Not equal to 
// > greater
// < less than 
// >= greater than or equal to
// <= less than or equal to

// ***Combining Comparators***
// && And 
// || Or 
// ! Not

// ***BMI Calculator Advanced*** 

// BMI Calculator Advanced (IF/ELSE)
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

// Write a function that outputs (returns) a different message depending on the BMI.

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

// IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.

function bmiCalculator(weight,height) {
    var bmi = Math.round(weight / Math.pow(height,2));
    var interpretation;
}   

if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

if (bmi >= 18.5 && bmi < 24.9) {
    interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
}

if (bmi >= 25) {
    interpretation ="Your BMI is " + bmi + ", so you are overweight.";
}
   
   return interpretation;

// ***Leap Year Challenge***

// Leap Year Challenge Exercise
// 💪This is a Difficult Challenge 💪

// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

// This is how to work out whether if a particular year is a leap year:

// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.


// e.g. Is the year 2000 a leap year?:

// 2000 ÷ 4 = 500 (Leap)

// 2000 ÷ 100 = 20 (Not Leap)

// 2000 ÷ 400 = 5 (Leap!)


// So the year 2000 is a leap year.

// But the year 2100 is not a leap year because:

// 2100 ÷ 4 = 525 (Leap)

// 2100 ÷ 100 = 21 (Not Leap)

// 2100 ÷ 400 = 5.25 (Not Leap)

// Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.

// Example Input 1

// 2400

// Example Output 1

// Leap year.

// Example Input 2

// 1989

// Example Output 2

// Not leap year.

// Hint

// Remember that the modulo (%) operator gives you the remainder of a division. We covered this in this lesson.

// Try to visualise the rules by creating a flow chart on www.draw.io.

// If you really get stuck, you can see the flow chart I created.

// Try to run your code in this Repl.it playground and check it against the known leap years.

function isLeap(year) {
    
    /**************Don't change the code above****************/    
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0){
                return "Leap year."
            } else {
                return "Not a leap year."
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
        
    
    /**************Don't change the code below****************/    
    
    }

    // Working with Javascript Arrays
    ["egg9", "egg22", "egg100"];
    var myEgg = eggs[1]; // retrieves a value from an array
    eggs.includes(); // checks array to see if it includes a specific value
    eggs.length //gives length of array.

    // ***Guest List Exercise***
    var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
    var guestName = prompt("What is your name?");
    
    if (guestList.includes(guestName)) {
        alert("Welcome!");
    } else {
        alert("Sorry, you're not on the list.")
    }

    // *** FIZZBUZZ CODING CHALLENGE ***
    // Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" 
    // instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both 
    // three and five print "FizzBuzz". 

   
    // add new items to the end of an array use: .push 
    // take something off the end of and array use: .pop

 var output = []; 
 var count = 1

function fizzBuzz() {
if (count % 3 === 0 && count % 5 == 0) {
    output.push("FizzBuzz");
}
else if (count % 3 === 0) {
    output.push("Fizz"); 
}
else if (count % 5 == 0) {
    output.push("Buzz");
}
else{
    output.push(count);
}
count++;

}

// *** Who's Buying Lunch Code Challenge ***

// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!

// Hint

// 1. You might need to think about Array.length.

// 2. Remember that Arrays start at position 0!


function whosPaying(names) {
    
    /******Don't change the code above*******/
    
    var numberOfPeople = names.length; //Don't know length of array so we grab how many names there arguments
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); //Gets whole random number
    var randomPerson = names[randomPersonPosition]
    
        return randomPerson + " is going to buy lunch today!";

    /******Don't change the code below*******/    
    }

// *** Control Statements: While Loops (State: while something is true)***
// var i = 1
// while (i<2) {
//     console.log(i);
//     i++;
// }



// *** Beer On the Wall Challenge 
var numberOfBottles = 99
while (numberOfBottles >= 0) { //continues to loop so long as the numberOfBottles is greater than or == 0
    var bottleWord = "bottles";
    if (numberOfBottles === 1) { // if the numberOfBottles is equal to 1 it switches bottleWord to it's singular form
        bottleWord = "bottle";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--; //Decrements the while loop
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// For loops (Iteration)
// for (var i = 1; i<2; i++) { // start, end, change
//      console.log(i);
// }

// *** The Fibonacci Exercise ***
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from

// 0 + 1 = 1

// 1 + 1 = 2

// 1 + 2 = 3

// 2 + 3 = 5

// etc.

// Create a function where you can call it by writing the code:

// fibonacciGenerator (n)

// Where n is the number of items in the sequence.

// So I should be able to call:

// fibonacciGenerator(3) and get

// [0,1,1]

// as the output.

// IMPORTANT: The solution checker is expecting an array as the correct output.

// Do NOT change any of the existing code.

// You do NOT need any alerts or prompts, the result should be returned from the function as an output.

// The first two numbers in the sequence must be 0 and 1.

// Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.

// e.g. for (var i = 0; i < 10; i ++)



// HINT: Use this Repl.it Playground to test out your solution.

// HINT: Use this flow chart to understand the logic if you get stuck.

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var output = [];
        if (n === 1) {
            output = [0];
        } 
        else if (n === 2) {
            output = [0,1];
        }
        else {
            output = [0, 1];
            
            for (var i = 2; i < n; i++) {
                output.push(output[output.length - 2] + output[output.length - 1]); 
            }
        }
        
        return output; 
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }

    output = fibonacciGenerator(30); 
    console.log(output)
    
    