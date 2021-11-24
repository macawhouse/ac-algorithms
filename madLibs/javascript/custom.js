

// <!-- Bonus: Make an object with the list elements as keys and the inputs as values.  -->


// var

// function
function makeMadLibs(e) {
 e.preventDefault();
    let noun = $("#noun").val();
    let adjective = $("#adjective").val();
    let person = $("#person");
    $("#story").append("Once upon a time in the land of the Fairies " + person + " was born " + adjective + " went " + noun + ".");

}
$("#lib-button").on("click", function (e) {
    makeMadLibs(e);
});

// 3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes pink cucumbers.") 

// function executions




// / 2) Add an event listener to the button so that it calls a makeMadLib function when clicked.