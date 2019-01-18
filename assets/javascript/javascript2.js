//Variables

var Questions = {
    Q1: "What is the capital of Ukraine?",
    Q2: "In what city would you expect to see pretzels being sold by street vendors in October?",
    Q3: "In 1949, the international community gathered in this city to ratify basic protections for citizens of the world living in a state of war...",
    Q4: "If you see the biggest ferris wheel you've ever seen in your life, you're probably in this city...",
    Q5: "Which of these is a sister city of Minneapolis? It is at approximately the same latitude..."
};

var Answers = ["Kiev", "Warsaw", "Paris", "Bratislava", 
"London", "Reykjavik", "Buenos Aires", "Munich", 
"The Hague", "Zurich", "Geneva", "Berlin",
"Rio De Janeiro", "London", "New York City", "Las Vegas",
"Lima", "Harbin", "Portland", "Osaka"
];

//I want to do it this way, but I don't have time to mess around with it anymore...
var QuestionsArray = [
    {
      question: "What is the capital of Ukraine?",
      answers: {
        a: "Kiev",
        b: "Warsaw",
        c: "Paris",
        d: "Bratislava"
      },
      correctAnswer: "a"
    },
    {
      question: "In what city would you expect to see pretzels being sold by street vendors in October?",
      answers: {
        a: "London",
        b: "Reykjavik",
        c: "Buenos Aires",
        d: "Munich"
      },
      correctAnswer: "d"
    },
    {
      question: "In 1949, the international community gathered in this city to ratify basic protections for citizens of the world living in a state of war...",
      answers: {
        a: "The Hague",
        b: "Zurich",
        c: "Geneva",
        d: "Berlin"
      },
      correctAnswer: "c"
    },
    {
        question: "If you see the biggest ferris wheel you've ever seen in your life, you're probably in this city...",
        answers: {
          a: "Rio de Janeiro",
          b: "London",
          c: "New York City",
          d: "Las Vegas"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of these is a sister city of Minneapolis? It is at approximately the same latitude...",
        answers: {
          a: "Lima",
          b: "Portland",
          c: "Harbin",
          d: "Osaka"
        },
        correctAnswer: "c"
      }
  ];
  


//Stopwatch Logic
//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function () {
    $("#StartGame").on("click", StartGame);
};



//  this is for the interval variable that's set in the start game function
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
//give people 60 seconds
var time = 60;
x = 0;

function reset() {

    time = 60;

    //  TODO: Change the "display" div to "00:00."
    $('#display').html("00:60");

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
    if (time === 0) {
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


//Wasted a TON of time trying to code this section differently.

function StartGame() {

    Object.keys(Questions).forEach(function (element) {
        // debugger;
        $("#add-question").append("<form></form>")
        $("#add-question").append( "<h4>" + Questions[element] + "</h4>");

        //Also need to append the answers

        // debugger;
        for (i = 0; i < 4; i++) {
            $("#add-question").append("<input>" + Answers[i + x] + "</input>");
            $('<input type="radio">');
        };
        x += 4;

        $("#add-question").append( "<br><br>");

    });

    
    x = 0;


    //generate the submit button once the questions are all on the page
    // if (indexOf(Questions[element] === Questions.length)) {

    //     $("#add-question").append("<button>" + "Submit Answer" + "</button>")


    //had to start this after the function is completed otherwise it times out
    if (x=16 && !clockRunning) {
        $('#display').text("00:00");
        intervalId = setInterval(count, 1000);
    };

};

function SubmitButton() {
    //take the answers and check for correctness
    //did not start this since the radius inputs were not working correctly

    //empty the questions div
    //count up points and display in a new div

    //empty the div where all the questions and answers are

    $("#add-question").empty();
    $("#")

};

function EndGame() {
    //if time runs out, run this function
    //this should do essentially the same thing as SubmitButton

    //probably don't actually need this... can just call the submit function
}




