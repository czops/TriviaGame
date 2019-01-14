//Variables

var Questions = {
    Q1: "What is the capital of Ukraine?",
    Q2: "In what city would you expect to see pretzels being sold by street vendors in October?",
    Q3: "In 1949, the international community gathered in this city to ratify basic protections for citizens of the world living in a state of war..."

};

var Answers = ["Kiev", "Warsaw", "Paris", "Bratislava", "London", "Reykjavik", "Buenos Aires", "Munich", "The Hague", "Zurich", "Geneva", "Berlin"];


//Stopwatch Logic
//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function () {
    $("#StartGame").on("click", StartGame);
};



//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 60;
x = 0;

function reset() {

    time = 60;

    //  TODO: Change the "display" div to "00:00."
    $('#display').html("00:00");

}


function stop() {

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    intervalId = null;
}

function count() {
    time--;
    //  TODO: increment time by 1, remember we cant use "this" here.

    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    TimeDisplay = timeConverter(time);
    $('#display').html(TimeDisplay);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    if (time = 0) {
        EndGame();
        SubmitButton();
    }
}

//  THIS FUNCTION IS DONE FOR US!
//  We do not need to touch it.

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}




// console.log(Questions.Q1)
// $("#add-question").html(
//     '<h4> ${Questions.Q1.question} </h4>'
// );

function StartGame() {

    Object.keys(Questions).forEach(function (element) {
        debugger;
        $("#add-question").append("<form></form>")
        $("#add-question").append( "<h4>" + Questions[element] + "</h4>");

        //Also need to append the answers

        debugger;
        for (i = 0; i < 4; i++) {
            $("#add-question").append("<input>" + Answers[i + x] + "</input>");
            $('<input type="radio">');
        };
        x += 4;

    });

    
    x = 0;


    //generate the submit button once the questions are all on the page
    if (indexOf(Questions[element] === Questions.length)) {

        $("#add-question").append("<button>" + "Submit Answer" + "</button>")

    };

    
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
    };
};

function SubmitButton() {
    //take the answers and check for correctness
    //empty the questions div
    //count up points and display in a new div

};

function EndGame() {
    //if time runs out, run this function
    //this should do essentially the same thing as SubmitButton

    //probably don't actually need this... can just call the submit function
}




