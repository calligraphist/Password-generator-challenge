// declaring variable and assigning values in array and append the set of blank array
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var selectedArray = [];
function generatePassword(){
// asking user to choose password length using if-else statement
numberOfCharacters = prompt("Please select your password length between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  //return "Please choose a valid number of characters.";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Not a valid number, Please enter a valid number.");
}
else {
  alert("The length of your password will be " + numberOfCharacters + " characters.");
  
}
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
