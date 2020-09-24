// Assignment Code for variables
var generateBtn = document.querySelector("#generate");
var numberVar = ["0123456789"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var symbols = ["!#$%&'\"\\()*+,-./:;<=>?@[]^_`{|}~"];

var possibleCharacters = [""];
var password = [""];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Created generatePassword function
function generatePassword() {
  // Added blank variables for possibleCharacters and password to clear previous runs through the code
  var possibleCharacters = [""];
  var password = [""];
  // Variable created to prompt for the password length which also confirms that the value should be an integer.  If then conditional added to verify that the number is between 8 and 128 and is not null.
  var characterLength = parseInt(
    prompt("How long do you want the password to be?")
  );
  console.log(characterLength);
  if (isNaN(characterLength) === true) {
    alert("Password length must be provided as a number and not empty.");
    return;
  }
  if (characterLength < 8) {
    alert("Password length has to be greater than 7 characters.");
    return;
  }
  if (characterLength > 128) {
    alert("Password length has to be less than 129 characters.");
    return;
  }
  //Created a variable to ask confirming questions for special characters, numbers, upper case and lower case
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
  console.log("Upper Case: " + upperVar);
  var lowerVar = confirm(
    "Should your password contain any Lower case characters?\n Yes = OK  No = Cancel"
  );
  console.log("Lower Case: " + lowerVar);
  //Checking the if then conditional if all confirms are false then provide the alert message
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
  //For each if then conditional checking to see if the values are true and if they are then adding the arrays above into the empty possibleCharacters variable.
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
  //For loop created for the random possibleCharacters which also takes into consideration the length.  Returns the password and console logs.
  for (var i = 0; i < characterLength; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  return password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
