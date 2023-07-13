
var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() { //detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
    if (!started) { //The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    // $(this) refers to the clicked element within the event handler function. It creates a jQuery object representing the clicked element.
    // .attr("id") retrieves the value of the "id" attribute of the clicked element using the .attr() method in jQuery.
    // var userChosenColour = $(this).attr("id"); assigns the ID of the clicked element to the userChosenColour variable.
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1); //Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
});

function checkAnswer(currentLevel) { 
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("Success"); // check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

        if (userClickedPattern.length === gamePattern.length){ //If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
            
            setTimeout(function () { //Call nextSequence() after a 1000 millisecond delay.
                nextSequence();
              }, 1000);
      
        }

    } else {

        console.log("Wrong"); 

        playSound("wrong"); //play this sound if the user got one of the answers wrong.

        $("body").addClass("game-over"); //there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");//Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

        startOver(); //Call startOver() if the user gets the sequence wrong.
    } 
}


function nextSequence() {
    userClickedPattern = []; //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

    level++; //increase the level by 1 every time nextSequence() is called

    $("#level-title").text("Level " + level); // Inside nextSequence(), update the h1 with this change in the value of level.

    var randomNumber = Math.floor(Math.random() * 4); // is assigned a random whole number between 0 and 3. This number is used to access a random index from the buttonColours array. 
    var randomChosenColour = buttonColours[randomNumber]; // is assigned the value from buttonColours at the randomly generated index.
    gamePattern.push(randomChosenColour); // randomChosenColour is added to the gamePattern array
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // sequence of fading out and fading in with a duration of 100 milliseconds each. This provides a visual effect for the selected color.
    // var audio = new Audio(); // Audio object created
    //     audio.play("sounds/" + randomChosenColour + ".mp3"); // Plays audio sound based on randomChosenColour selected
    playSound(randomChosenColour); // code refactored
}

function playSound(name) { // function called playSound() that takes a single input parameter called name
    var audio = new Audio("sounds/" + name + ".mp3"); // audio added to name parameter
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed"); // add pressedclass to button that gets clicked inside animatePress
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed"); //remove the pressed class after a 100 milliseconds
      }, 100);
}

function startOver() { //reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}