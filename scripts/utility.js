function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function generateAlphabet() {
  // get or create alphabet arrey
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const makeArrey = alphabet.split('');
  //console.log(makeArrey);

  // generate random number with  round
  const randomNumber = Math.random()*26;
  const index = Math.round(randomNumber);
  //console.log(randomNumber);

  // get random alphabet of this arrey
   const randomAlphabet = makeArrey[index];
   //console.log(randomAlphabet);
   return randomAlphabet;
}

//add background color by id
function setBackgroundColorById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400');
}
//remove background color by id
function removeBackgroundColorById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}