// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberVar = ["0123456789"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var symbols = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

var possibleCharacters = [""];
var password = [""];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var characterLength = parseInt(
    prompt("How long do you want the Password to be?")
  );
  console.log(characterLength);
  if (isNaN(characterLength) === true) {
    alert("Password length must be provided as a number.");
    return;
  }
  if (characterLength < 8) {
    alert("Password length has to be greater than 8 characters.");
    return;
  }
  if (characterLength > 128) {
    alert("Password length has to be less than 129 characters.");
    return;
  }
  var specialCharacters = confirm(
    "Should your password contain any special characters?\n Yes = OK  No = Cancel"
  );
  console.log("Special Character: " + specialCharacters);
  var numericVar = confirm(
    "Should your password contain any numeric characters?\n Yes = OK  No = Cancel"
  );
  console.log("Numeric: " + numericVar);
  var upperVar = confirm(
    "Should your password contain any Upper case characters?\n Yes = OK  No = Cancel"
  );
  console.log("Special Character: " + upperVar);
  var lowerVar = confirm(
    "Should your password contain any Lower case characters?\n Yes = OK  No = Cancel"
  );
  console.log("Special Character: " + lowerVar);
  if (
    upperVar === false &&
    lowerVar === false &&
    specialCharacters === false &&
    numericVar === false
  ) {
    alert(
      "At least one character type must be selected before the password can be generated."
    );
    return;
  }
  //create object (called something like password options).  all of the options/variables will be in the object.  eventually another function will be called random which will randomize the password options.
  if (specialCharacters) {
    possibleCharacters += symbols;
  }
  if (numericVar) {
    possibleCharacters += numberVar;
  }
  if (upperVar) {
    possibleCharacters += upper;
  }
  if (lowerVar) {
    possibleCharacters += lower;
  }
  console.log(possibleCharacters);

  for (var i = 0; i < characterLength; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  return password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var reload = document.location.reload();

// generateBtn.addEventListener("mouseout", reload);

// David's thoughts: create the prompts first for questions then store the values then apply them to the password before displaying the password

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters (DONE)
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
