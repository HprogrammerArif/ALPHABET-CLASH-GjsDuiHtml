// function play() {
//   //Step-1: hide the home section and add class hidden to the home section
//   const homeSection = document.getElementById('home-screen');
//   const classList = homeSection.classList;
//   classList.add('hidden');
//   // console.log(classList);

//   //Step-2: Show the play ground
//   const playgroundSection = document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
// }


function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log('Player pressed: ', playerPressed);

  if (playerPressed === 'Escape') {
    gameOver();
  }

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // checked matched or not
  if(playerPressed === expectedAlphabet){

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore)



    // update score
    // 1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
      
   

     
    // // 2. increased current score by 1
    // const newScore = currentScore + 1;

    // // 3. show the update score element
    // currentScoreElement.innerText = newScore;

    // // star a new round
    removeBackgroundColorById(expectedAlphabet)
    continueGame();

  } else {

   const currentLife = getTextElementValueById('current-life');
   const updatedLife = currentLife - 1;
   setTextElementValueById ('current-life', updatedLife);

   if (updatedLife === 0) {
      gameOver();
   }


    // console.log("you missed. You lost a life");
    // // step 1: get the current life number
    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);

    // // step-2: reduce the life count
    //    const newLifeScore = currentLife - 1;

    // // step-3: display the updated life count
    //     currentLifeElement.innerText = newLifeScore;
  }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame() {
  // generate a random alphabet
  const alphabet = generateAlphabet();
  console.log("Your random alphabet is:", alphabet);

  //set random alphabet to screen
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}


//STEP-1

function play() {
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');

  // reset score & life
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
  continueGame();
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');

  // update final score
  const lastScore = document.getElementById('current-score');
  const updatedLastScore = lastScore.innerText;
  setTextElementValueById('last-score', updatedLastScore);

  // clear the last selected alphabet
  const currentAlphabet = getElementTextById('current-alphabet');
  //console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}