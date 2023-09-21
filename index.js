'use strict'

//these are my questions and choices//
const myQuestions = [
	{
    number: 1,
    
	 theQuestion:	`Which country's flag is this? <img class= 'fruit' src='basket/ad.png' alt="like a tiny orange">` ,
    choice1:`Andorra`,
    choice2:`uganda`,
    choice3:`sahrawi`,
    choice4:`tanzania`,
    answers: `Andorra`

    
	},
	{
    number: 2,
	theQuestion:`Which country's flag is this? <img class= 'fruit' src='basket/ae.png' alt="green on outside, pink on the inside">`,
	    choice1:`Iraq`,
      choice2:`Iran`, 
      choice3:`UAE`, 
      choice4:`Argentina`,
      answers: `UAE`
	},
	{
    number: 3,
 theQuestion:`Which country's flag is this? <img class= 'fruit' src='basket/ag.png' alt="a very happy kermit the frog">`,
	   choice1:`Bahamas`,
     choice2:`Bangladesh`,
     choice3:`Antigua and Barbuda`,
     choice4:`Togo`,
     answers: `Antigua and Barbuda`
	},
	{
    number: 4,
theQuestion:`Which country's flag is this <img class= 'fruit' src='basket/au.png' alt="rough armadadillo skin big seed white sweet inside">`,
	  choice1:`New Zealand`,
    choice2:`United Kingdom`,
    choice3:`Australia`,
    choice4:`Azerbaijan`,
    answers: `Australia`
	},
	{
    number: 5,
theQuestion:`Which country's flag is this? <img class= 'fruit' src='basket/ar.png' alt="shape of eggplant, with tiny black seeds, inside is scarlet colored">`,
    choice1:`argentina`, 
    choice2:`mexico`, 
    choice3:`Portugal`, 
    choice4:`Sao tome & Principe`,
    answers: `argentina`
	},
  {
    number: 6,
	theQuestion:`Which country's flag is this?<img class= 'fruit' src='basket/az.png' alt="a very healthy berry in fruit bowls">`,
	    choice1:`Turkiye`,
      choice2:`Armenia`, 
      choice3:`Azerbaijan`, 
      choice4:`Uruguay`,
      answers: `Azerbaijan`
	},
  {
    number: 7,
	 theQuestion:`Which country's flag is this?<img class= 'fruit' src='basket/ba.png' alt="teardrop shaped, yellow-orangish, tropical fruit">`,
	    choice1:`Tajikstan`,
      choice2:`Bosnia and Herzegovina`, 
      choice3:`Malawi`, 
      choice4:`South Africa`,
      answers: `Bosnia and Herzegovina`
	},
  {
    number: 8,
	 theQuestion:`Which country's flag is this?<img class= 'fruit' src='basket/bb.png' alt="a tropical and delicious fruit, very seedy">`,
	    choice1:`Spain`,
      choice2:`Barbados`, 
      choice3:`Trinidad & Tobago`, 
      choice4:`St Vincent`,
      answers: `Barbados`
	},
  {
    number: 9,
	 theQuestion:`Which country's flag is this <img class= 'fruit' src='basket/bd.png' alt="strange fruit, it's all orange">`,
	    choice1:`Bangladesh`,
      choice2:`India`, 
      choice3:`Pakistan`, 
      choice4:`China`,
      answers: `Bangladesh`
	},
  {
    number: 10,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/be.png' alt="a bunch of chiquitas">`,
	    choice1:`Netherlands`,
      choice2:`Germany`, 
      choice3:`Switzerland`, 
      choice4:`Belgium`,
      answers: `Belgium`
  },
     {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
     },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
    },
    {
    number: 11,
	 theQuestion: `Which country's flag is this <img class= 'fruit' src='basket/bf.png' alt="a bunch of chiquitas">`,
	    choice1:`Burkina Faso`,
      choice2:`Mexico`, 
      choice3:`Togo`, 
      choice4:`Belgium`,
      answers: `Burkina Faso`
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


//this is the next button by the time it get to question 11 it'll stop showing the next question and show the results page//

function clickNextButton() {
  $('#quiz').on('click', '#next-button', function(event){
      if(questionNumber === 11) {
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
       <img class= 'fruit' src='basket/hap.gif'>
       <button id="next-button"><b>Next</b></button>
    </section>`
;
const incorrectPage =
     `<section class="feedback" role="main">
       <h2>Very Wrong... <br> Correct Answer: <u> c </u> </h2>
      <img class= 'fruit' src='basket/THANOS.gif'>
       <button id="next-button"><b>Next</b></button>
    </section>`;

function showNegativeFeedback() {
  $('#quiz').html(incorrectPage);
 
}

function xincorrectPage () 
{
return

    `<section class="feedback">
       <h2>Very Wrong...</h2>
       <img class= 'fruit' src='basket/THANOS.gif' alt="a sad fruit">
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
      <img class= 'fruit' src='basket/hap.gif' alt="dancing fruit">
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
