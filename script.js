// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defining variables
var newPassword = {
  length: 8,
  specialChar: true,
  numbers: true,
  capLetters: true,
  lowLetters: true,
}

var includeSpecialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var includeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var includeLowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var includeCapLetters = includeLowLetters.map(v => v.toUpperCase());
var  newArray = null;
var passwordBuilder;

//Gather user input for variable data
function gatherInput() {
  newPassword.length = prompt("Set password length between 8 and 128 character:");
  while (newPassword.length < 8 || newPassword.length > 128) {
    newPassword.length = prompt("Length must be between 8 and 128 character. How long would you like?");
  }
  newPassword.specialChar = confirm("Would you like to include special characters?");
  newPassword.numbers = confirm("Would you like to include numbers?");
  newPassword.capLetters = confirm("Would you like to include capital letters?");
  newPassword.lowLetters = confirm("Would you like to include lowercase letters?");
}
//Determines which characters to include in the random selection based on user preferences
function dataType() {
  newArray = null;

  if (newPassword.specialChar === true) {
     newArray = includeSpecialChar;
    }
  if (newPassword.numbers === true && newArray === null) {
    newArray = includeNumbers;
   }
 else if (newPassword.numbers === true && newArray !== null) {
   newArray = includeNumbers.concat(newArray);
 }
 if (newPassword.lowLetters === true && newArray === null) {
  newArray = includeLowLetters;
 }
else if (newPassword.lowLetters === true && newArray !== null) {
 newArray = includeLowLetters.concat(newArray);
}
if (newPassword.capLetters === true && newArray === null) {
  newArray = includeCapLetters;
 }
else if (newPassword.capLetters === true && newArray !== null) {
 newArray = includeCapLetters.concat(newArray);
}
return newArray;
}


function randomSelector() {

  passwordBuilder = "";

  for (var i = 0; i < newPassword.length; i++) {
    var passwordCharacter = newArray[Math.floor(Math.random() * newArray.length)];
    passwordBuilder = passwordBuilder + passwordCharacter;
  }
  return (passwordBuilder); 
}

  
//Function called in order to generate password
function generatePassword() {
  gatherInput();
  dataType();
  randomSelector();
  console.log(newArray); 
  return passwordBuilder;
  

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
