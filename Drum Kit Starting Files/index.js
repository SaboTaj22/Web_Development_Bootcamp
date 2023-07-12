// alert("Hello"); // test to make sure index.html and .js are linked
// document.querySelector("button").addEventListener("click", handleClick)
// //addEventListener() sets up a function to be called whenever the specified event is delivered to the target.

// function handleClick() { // create function for handleClick of what you want it to do. Button is now listening for each time it gets clicked.
//     alert("I got clicked!");
// }

// ***Long Way***

// document.querySelectorAll("button")[0].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelectorAll("button")[1].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelectorAll("button")[2].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelectorAll("button")[3].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelectorAll("button")[4].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelectorAll("button")[5].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelectorAll("button")[6].addEventListener("click", function () {
//     alert("I got clicked!");
// });

// ***Calculator funciton exercise***
// function add(num1, num2) {
//     return num1 + num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function mulitiply(num1, num2) {
//     return num1 * num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// ***Creating an Object***
// var housekeeper1 = {
//     yearsOfExperience: 12, 
//     name: "Jane", 
//     cleaningSpecialties: ["bathroom", "lobby", "bedroom"]
// }

// ***Constructor Function***
// function BellBoy (name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age; 
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// // Initialize Object
// var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
// var bellBoy1 = new BellBoy("Jimmy", 21, true, ["English", "Vietnamese"]);

// ***Methods "Functions that are associated with an object"***
//  this.moveSuitcase = function () {
//     alert("May I take your suitcase?");
//     pickUpSuitcase();
//     moveBy();
//  }



// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) { // when i is less than the # of drum buttons, continue iterating

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
       
        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML);

    });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        
        case "j":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;

        default: console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentkey) {

   var activeButton = document.querySelector("." + currentkey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}
