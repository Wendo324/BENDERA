'use strict'

//these are my questions and choices//
const myQuestions = [
	{
    number: 1,
    
	 theQuestion:	`What fruit is this? <img class= 'fruit' src='http://sanleonardello.it/wp-content/uploads/2017/02/17868-300x300.jpg' alt="like a tiny orange">` ,
    choice1:`not a fruit`,
    choice2:`peach`,
    choice3:`kumquat`,
    choice4:`banana`,
    answers: `kumquat`

    
	},
	{
    number: 2,
	theQuestion:`What fruit is this?<img class= 'fruit' src='basket/guava.png' alt="green on outside, pink on the inside">`,
	    choice1:`pistacchio`,
      choice2:`lime`, 
      choice3:`guava`, 
      choice4:`banana`,
      answers: `guava`
	},
	{
    number: 3,
 theQuestion:`What fruit is this? <img class= 'fruit' src='basket/kermit.jpg' alt="a very happy kermit the frog">`,
	   choice1:`pepper`,
     choice2:`kiwi`,
     choice3:`not a fruit`,
     choice4:`banana`,
     answers: `not a fruit`
	},
	{
    number: 4,
theQuestion:`What fruit is this? <img class= 'fruit' src='basket/lychee.png' alt="rough armadadillo skin big seed white sweet inside">`,
	  choice1:`dragon fruit`,
    choice2:`pomegranate`,
    choice3:`lychee`,
    choice4:`banana`,
    answers: `lychee`
	},
	{
    number: 5,
theQuestion:`What fruit is this? <img class= 'fruit' src='basket/papaya.jpg' alt="shape of eggplant, with tiny black seeds, inside is scarlet colored">`,
    choice1:`toast`, 
    choice2:`rasberry`, 
    choice3:`papaya`, 
    choice4:`banana`,
    answers: `papaya`
	},
  {
    number: 6,
	theQuestion:`What fruit is this?<img class= 'fruit' src='basket/acai.jpg' alt="a very healthy berry in fruit bowls">`,
	    choice1:`floss`,
      choice2:`cherry`, 
      choice3:`açai`, 
      choice4:`banana`,
      answers: `açai`
	},
  {
    number: 7,
	 theQuestion:`What fruit is this?<img class= 'fruit' src='basket/mango.jpg' alt="teardrop shaped, yellow-orangish, tropical fruit">`,
	    choice1:`cookie`,
      choice2:`dragon fruit`, 
      choice3:`mango`, 
      choice4:`banana`,
      answers: `mango`
	},
  {
    number: 8,
	 theQuestion:`What fruit is this?<img class= 'fruit' src='basket/passionfruit.jpg' alt="a tropical and delicious fruit, very seedy">`,
	    choice1:`sticker`,
      choice2:`pear`, 
      choice3:`passion fruit`, 
      choice4:`banana`,
      answers: `passion fruit`
	},
  {
    number: 9,
	 theQuestion:`What fruit is this? <img class= 'fruit' src='basket/persimmon.jpg' alt="strange fruit, it's all orange">`,
	    choice1:`usb drive`,
      choice2:`special pear`, 
      choice3:`persimmon`, 
      choice4:`banana`,
      answers: `persimmon`
	},
  {
    number: 10,
	 theQuestion: `What fruit is this? <img class= 'fruit' src='basket/banana.jpg' alt="a bunch of chiquitas">`,
	    choice1:`pen`,
      choice2:`pear`, 
      choice3:`orange you glad it's a banana`, 
      choice4:`orange`,
      answers: `orange you glad it's a banana`
	},
];


let questionNumber = 1;
let correctAnswers = 0;

// this is the form set, with the selcet buttons//
function questionForm(correctAnswers, question, questionsAnswered) {
  return `
    <section id="question-page" role="main" class="col-6">
    <h2 id="question">${question.theQuestion}</h2>
    
    <form>
      <fieldset>
      <legend id='choice-box'>Choices</legend>
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" checked value="${question.choice1}" >  a. </input>
          ${question.choice1}
        </label>
  
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" value="${question.choice2}" >  b. </input>
          ${question.choice2}
        </label>
  
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" value="${question.choice3}">  c. </input>
          ${question.choice3}
        </label>
  
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" value="${question.choice4}">  d. </input>
          ${question.choice4}
        </label>
      </fieldset>  
      <br>
      <button id="submit-button"><b>Submit</b></button>
    </form>

    <div id="status-bar">
    <br>
      <span id="question-count">Question: ${question.number}/10</span>
      <span id="score-count">Score: ${correctAnswers} </span>
    </div>
  </section>
  `;
}
// this is the start button//
function clickStartButton() {
  $('#start-button').click(function(event) {
    nextQuestion();
  });
}


// this is the submit button, should check the input to see if the right answer is picked
function clickSubmitButton() {
  $('#quiz').on('click', '#submit-button', function(event) {
    event.preventDefault();
    
        const answer= $('input:checked').val();
           

            
            if (checkAnswer(answer)) {
              showPositiveFeedback();
            }
            else {
              showNegativeFeedback();
            }
  });
}


//this is the next button by the time it get to question 10 it'll stop showing the next question and show the results page//

function clickNextButton() {
  $('#quiz').on('click', '#next-button', function(event){
      if(questionNumber === 10) {
        theResultsAreIn(correctAnswers);
      }
     
      else {
        showTheAnswer();
        nextQuestion();
      }
  })
}


function nextQuestion() {
  const question = myQuestions [questionNumber - 1];

  const questionsAnswered = 
  questionNumber - 1;

   $('#quiz').html(questionForm(correctAnswers, question, questionsAnswered));
}

//this function checks answer
function checkAnswer(answer) {
  
  if(answer === myQuestions[questionNumber-1].answers) {
    console.log('Correct!');
    return true;
  } 
  else {
    console.log('WRONG... it\'s actually ' + myQuestions[questionNumber-1].answers);
    return false;
  }
  
}

// feedback section //
function showPositiveFeedback () {
  $('#quiz').html(correctPage);
    runIfCorrect();

}

// this should be the image/page that pops up to show feedback
const correctPage = 
    `<section class="feedback" role="main">
       <h2>Easy Peezy Lemon Squeezy!</h2>
       <img src= "https://cdn.dribbble.com/users/436306/screenshots/4471190/pinya-dance.gif" alt="dancing pineapple">
       <button id="next-button"><b>Next</b></button>
    </section>`
;
const incorrectPage =
     `<section class="feedback" role="main">
       <h2>Berry Wrong... <br> Correct Answer: <u> c </u> </h2>
      <img class= 'fruit' src='basket/sadfruit.gif'>
       <button id="next-button"><b>Next</b></button>
    </section>`;

function showNegativeFeedback() {
  $('#quiz').html(incorrectPage);
 
}

function xincorrectPage () 
{
return

    `<section class="feedback">
       <h2>Berry Wrong...</h2>
       <img class= 'fruit' src='basket/sadfruit.gif' alt="a sad fruit">
       <button id="next-button"><b>Next</b></button>
    </section>`
;
}

function showTheAnswer() {
  questionNumber++;
}
function runIfCorrect() {
  correctAnswers++;
}
// quiz results and quiz retake section//

function clickRestartButton() {
  $('#quiz').on('click', '#restart-button', function(event) {

    questionNumber = 1;

    correctAnswers = 0;

    nextQuestion();
  });
}

function theResultsAreIn(correctAnswers) {
  $('#quiz').html(`
    <section id="final-page">
      <h2>Final Score: ${correctAnswers} out of 10!</h2>
      <button id="restart-button"><b>Again?</b></button>
      <br>
      <img class= 'fruit' src='basket/dancing.gif' alt="dancing fruit">
    </section>
  `); 
}

//this runs the stuff//
function callButtons() {
  clickStartButton();
  clickSubmitButton();
  clickNextButton();
  clickRestartButton();
}

callButtons();
