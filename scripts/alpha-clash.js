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

function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}

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