// declaring variable and assigning values in array and append the set of blank array
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var selectedArray = [];
function generatePassword(){
// asking user to choose password length using if-else statement
numberOfCharacters = prompt("Please select your password length between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  numberOfCharacters = prompt("Please choose a valid number between 8 and 128.");
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Not a valid number, Please enter a valid number between 8 and 128.");
}
else {
  alert("The length of your password will be " + numberOfCharacters + " characters.");
  
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


// function generateRandom(array){
// var index = Math.floor();
// return arr[index];
// }

for(var t=0; t< numberOfCharacters; t++){
  var password = selectedArray[Math.floor(Math.random() *selectedArray.length)];
}
Array.prototype.random = function (length) {
  return this[Math.floor((Math.random()*length))];
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
