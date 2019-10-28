var check          = false,
    numbers        = "0123456789",
    uppercase      = "ABCDEFGHIJKLMNOPQRSTUV",
    lowercase      = "abcdefghijklmnopqrstuv",
    specialChars   = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    password       = [],
    passwordLength = 0,
    selectNumbers  = false,
    selectUpper    = false,
    selectLower    = false,
    selectSpecial  = false,
    chosenCharSets = "",
    passDisplay    = document.querySelector("#password"),
    generate       = document.querySelector("#generate"),
    copyBtn        = document.querySelector("#copy");


    
// FUNCTION TO COPY PASSWORD TO CLIPBOARD
function clipCopy(){
  passDisplay.select();
  document.execCommand("copy");
}


// FUNCTION TO COMBINE USERS CHAR CHOICES
function generateChoice() {
  if(selectNumbers) {
    chosenCharSets += numbers;
  } if(selectUpper) {
    chosenCharSets += uppercase;
  } if(selectLower) {
    chosenCharSets += lowercase;
  } if(selectSpecial) {
    chosenCharSets += specialChars;
  }
}

// FUNCTION ASSIGNING VALUE TO CHAR VARIABLES IF USER CHOOSES THEM
function confirmOption() {
  var number = confirm("Use Numbers?");
  var upper = confirm("Use Uppercase?");
  var lower = confirm("Use Lowercase?");
  var special = confirm("Use Special Characters?");
  if (number) {
    chosenCharSets += numbers;
  }
  if (upper) {
    chosenCharSets += uppercase;
  }
  if (lower) {
    chosenCharSets += lowercase;
  }
  if (special) {
    chosenCharSets += specialChars;
  }
}

// FUNCTION CHECKING THAT A CHARACTER SET HAS BEEN CHOSEN
function checkForChoice() {
  if (chosenCharSets === "") {
    check = false;
    alert("Must choose a character.");
  } else {
    return true;
  }
}

// FUNCTION ASKING USER TO CHOOSE BETWEEN 8-128 CHARS
function lengthSelect() {
  var entry = prompt("Choose password between 8-128 charcters");
    //   CHECK IF ENTRY IS A WHOLE NUMBER
  if (isNaN(entry) || entry % 1 != 0) {
    alert("Must be a whole number");
    lengthSelect();
    // CHECK IF ENTRY IS BETWEEN 8-128
  } else if (entry > 128 || entry < 8) {
    alert("Must be between 8-128");
    lengthSelect();
  } else {
    return passwordLength = (entry);
    
  }
}

// FUNCTION LOOPING THROUGH GENERATING RANDOM PASSWORD
function generatePassword() {
  password = [];
  for (let i = 0; i < passwordLength; i++) {
    // PUSHING RANDOM INDICES OF CHOSENCHARSET INTO PASSWORD ARRAY
    password.push(
      chosenCharSets[
        Math.floor(Math.random() * Math.floor(chosenCharSets.length)- 1)
      ]
    );
  }
  // CONVERT ARRAY TO STRING
  var passwordString = password.join("");
  passDisplay.innerHTML = passwordString;
}

// INIT FUNCTION
function init() {
  lengthSelect();
  while (!check) {
    confirmOption();
    generateChoice();
    check = checkForChoice();
    generate.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", clipCopy);
  }
}

init();


