// Left hand side image element
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // set value of variable to random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // switches source image according to random number generated

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png (Created to show more detail as to what needs to be accessed to change img)

var image1 = document.querySelectorAll("img")[0]; // Use selectorAll because we are using multiple images

image1.setAttribute("src", randomImageSource); 


// Right hand side image element
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // simplified version of lines 4 and 6. (Utilize random number generator to match random number on dice image)

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Winning Conditions
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!"; // only 1 h1, so use querySelector
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
  