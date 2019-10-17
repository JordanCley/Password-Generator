var passwordLength = 0;
var selectNumbers = false;
var selectUpper = false;
var selectLower = false;
var selectSpecial = false;
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUV";
var lowercase = "abcdefghijklmnopqrstuv";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var chosenCharSets = "";
var password = "";

lengthSelect()
confirmOption();
generateChoice();
checkForChoice();
generatePassword();

console.log(selectNumbers);
console.log(selectUpper);
console.log(selectLower);
console.log(selectSpecial);
console.log(passwordLength);
console.log(password);


// FUNCTION TO COMBINE USERS CHAR CHOICES
function generateChoice() {
  switch(true){
    case selectNumbers:
      chosenCharSets += numbers;
    case selectUpper:
      chosenCharSets += uppercase;
    case selectLower:
      chosenCharSets += lowercase;
    case selectSpecial:
      chosenCharSets += specialChars;
      break;
  }
}



function confirmOption(){
  var Numbers = confirm("Use Numbers?");
  var Upper = confirm("Use Uppercase?");
  var Lower = confirm("Use Lowercase?");
  var Special = confirm("Use Special Characters?");
  switch(true){
    case Numbers:
      selectNumbers = Numbers;
    case Upper:
      selectUpper = Upper;
    case Lower:
      selectLower = Lower;
    case Special:
      selectSpecial = Special;
      break;
  }
}



function checkForChoice(){
  if(chosenCharSets === ""){
    alert("Must choose a character.");
    confirmOption();
  }
}


// FUNCTION ASKING USER TO CHOOSE BETWEEN 8-128 CHARS
function lengthSelect() {
  var entry = prompt("Choose password between 8-128 charcters");
  //   CHECK IF ENTRY IS NOT A NUMBER
  if (isNaN(entry)) {
    alert("Must be a number");
    lengthSelect();
    // CHECK IF ENTRY IS BETWEEN 8-128
  } else if (entry > 128 || entry < 8) {
    alert("Must be between 8-128");
    lengthSelect();
  } else {
    return passwordLength = entry;
  }
}

