// minifier.org minifies your code! Make it load much faster!
// $(document).ready(function() { //This line makes sure jQuery is ready if you don't place it in the correct spot!
//     $("h1").css("color", "red");
// });
// $("h1").css("color", "green"); // one property gets value, two css properties sets the value!

$("h1").addClass("big-title margin-50");

$("button");

// $("h1").text("See you later!"); // Change text in jQuery

// $("button").html("<em>Hey</em>"); // Adding HTML to the just like .innerhtml

// $("h1").removeClass("big-title"); // Removes class 

// $("img").attr("src"); // Gets value of attribute

// $("a").attr("href", "https://www.yahoo.com") //Set value of attribute


// ***Adding Event Listeners***
// $("h1").click(function() {
//  $("h1").css("color", "purple");
// });

// ***Loops using jQuery***

// Loop with just Javascript
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function() { //By selecting button, jQuery automatically looks at all buttons. This code also adds click a listener
//     $("h1").css("color", "purple");
// });

// $(document).keypress(function(event) { //Detecting key strokes
//     $("h1").text(event.key);
// });

// $("h1").
// before() method adds new element before the opening tag of selected method.
// after() method adds new element after the opening tag of selected method.
// prepend() method adds new element before content of h1 and right after the opening tag of selected method.
// append() method adds new element after content of h1.


// ***Web Animations***
// $("button").on("click", function() {
//     $("h1").hide(); // Also use toggle(), fade(), fadeOut(), fadeIn(), fadeToggle(), slideUp(), slideDown(), slideToggle(), 
// }); 

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5}); //only add a numbers in this method. Can't change color with animation method.
// }); 


//  ***Chaining Methods***
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); 
});
