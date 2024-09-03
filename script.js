/*Add your JavaScript here*/

var harryScore = 0; // Store the dog score
var hermioneScore = 0; // Store the cat score
var ronScore = 0; 

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

// Extension 1 - Add more questions
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", harry);
q1a2.addEventListener("click", ron);
q1a3.addEventListener("click", hermione);

q2a1.addEventListener("click", ron);
q2a2.addEventListener("click", hermione);
q2a3.addEventListener("click", harry);

q3a1.addEventListener("click", harry);
q3a2.addEventListener("click", hermione);
q3a3.addEventListener("click", ron);

q4a1.addEventListener("click", hermione);
q4a2.addEventListener("click", harry);
q4a3.addEventListener("click", ron);

q5a1.addEventListener("click", harry);
q5a2.addEventListener("click", hermione);
q5a3.addEventListener("click", ron);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

// Track dog score and check if quiz is complete
function harry() {
  harryScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" +"harryScore = " + harryScore);

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track cat score and check if quiz is complete
function hermione() {
  hermioneScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "hermioneScore = " + hermioneScore);

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
  }

}

function ron() {
  ronScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" +"ronScore = " + ronScore);

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Update quiz result
function updateResult() {
  // Extension 2 - Click button to update result
  displayResult.addEventListener("click", display);
}

function display(){
  if (harryScore >= 2) {
    result.innerHTML = "You are Harry Potter!";
document.getElementById('resultpic').innerHTML = " <img src = 'Harry 1.gif' alt = 'Harry Potter'>";
    console.log("You are Harry Potter!")
  } else if (hermioneScore >= 2) {
    result.innerHTML = "You are Hermione Granger!";
document.getElementById('resultpic').innerHTML = " <img src = 'Hermione 1.gif' alt = 'Hermione Granger'>";

    console.log("You are Hermione Granger!")
  }
  else if (ronScore >= 2) {
    result.innerHTML = "You are Ron Weasley!";
    document.getElementById('resultpic').innerHTML = " <img src = 'Ron 1.gif' alt = 'Ron Weasley '>";
    console.log("You are Ron Weasley!")
  }
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You are ...";  document.getElementById('resultpic').innerHTML = " <img src = 'Golden Trio3.gif' alt = 'Golden Trio'>";
  questionCount = 0;
  harryScore = 0;
  hermioneScore = 0;
  ronScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "harryScore = " + harryScore + "\t" + "hermioneScore = " + hermioneScore + "\t" + "ronScore = " + ronScore);
  enableQuestions();
}

// Extension 3 - Disable buttons

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true;
  q1a3.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
  q2a3.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
  q3a3.disabled = true;

}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
  q5a3.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q1a3.disabled = false;
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q2a3.disabled = false; 
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false; 
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q4a3.disabled = false; 
  q5a1.disabled = false; 
  q5a2.disabled = false;
  q5a3.disabled = false; 
}


