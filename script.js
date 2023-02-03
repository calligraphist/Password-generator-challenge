// declaring variable and assigning values in array and append the set of blank array
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var expectedOutcome = [];
function generatePassword(){
// asking user to choose password length using if-else statement and a for loop

for (var askprompt=true; askprompt==true;){
var numberOfCharacters = prompt("Please select your password length between 8-128 characters.");
if (numberOfCharacters === null){
  return ""
}
numberOfCharacters = parseInt(numberOfCharacters, 10)
 if (numberOfCharacters < 8 || numberOfCharacters > 128) {
alert("Please choose a valid number between 8 and 128.");
} else if (isNaN(numberOfCharacters)) {
alert("Not a valid number, Please enter a valid number between 8 and 128.");
}
else {
  alert("The length of your password will be " + numberOfCharacters + " characters.");
 askprompt=false
}
}
//choice of characters given i.e., uppercase, lowercase, numbers and/or special characters.
choiceOfupperCase = confirm("Do you want uppercase letters in your password?");
if (choiceOfupperCase) {
  alert("you have selected uppercase letters")
} else {
  alert("uppercase letters will not be a part of your password")
}
choiceOflowerCase = confirm("Do you want lowercase letters in your password?");
if (choiceOflowerCase) {
  alert("you have selected lowercase letters")
} else {
  alert("lowercase letters will not be a part of your password")
}
choiceOfnumbers = confirm("Do you want numbers in your password?");
if (choiceOfnumbers) {
  alert("you have selected numbers")
} else {
  alert("numbers will not be a part of your password")
}
choiceOfspecialChar= confirm("Do you want special charecters in your password?");
if (choiceOfspecialChar) {
  alert("you have selected specialChar")
} else {
  alert("specialChar will not be a part of your password")
}

if (choiceOfupperCase===true || choiceOflowerCase===true || choiceOfnumbers===true || choiceOfspecialChar===true) {
  alert("your passward will contain your chosen characters.");
} else {
  alert( "please choose atleat one of the character types.")
}

//combining selected characters
if (choiceOfupperCase) {
  expectedOutcome = expectedOutcome.concat(upperCase);
}
if (choiceOflowerCase) {
  expectedOutcome = expectedOutcome.concat(lowerCase);
}
if (choiceOfnumbers) {
  expectedOutcome = expectedOutcome.concat(numbers);
}
if (choiceOfspecialChar) {
  expectedOutcome = expectedOutcome.concat(specialChar);
}
//
var finalPassword = "";
for (var i = 0; i < numberOfCharacters; i++) {
  var random =Math.floor(Math.random() * expectedOutcome.length);
   finalPassword += expectedOutcome[random];
   //finalPassword = finalPassword + expectedOutcome[random];
  }
  return finalPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
