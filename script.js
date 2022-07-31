//Function to generate Password
function generatePassword(){
  // 1) Prompt user for paramaters
  // length, special, numbers, uppercase, lowercase
  var passwordChoices = getParameters();
  var options = passwordChoices.length;
  var password = "";
  // 2) Create random password from available characters
  // for loop run number of times that user sets length to
  // add random character to password string
  for (i=0; i<length; i++) {
    //add 1 random character to password
    var values = [Math.floor(Math.random() * options)];
    password = password + passwordChoices[values]
  }
  return password
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

//variables for generator options
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','3','4','5','6','7','8','9','0'];
const symbols = ['!', '@', '#', '$', '%', '&'];

//Function to set Parameters for generator
function getParameters() {
  choices = [];
  //set length via prompt
  length = prompt("Please set desired password length.\nMinimum length of 8 characters and Max of 128 characters.");
  if(isNaN(length)){
    alert("Please Try again, using only numbers between 8 and 128.");
    return
  } else if (length >= 8 && length <=128) {
    alert("Password Length Ok")
  } else if (length <8 || length >128) {
    alert("Password Length Denied\nPlease Try Again");
    return false
  } 
  //add characters to availableCharacters via survay/true/false via user input
  if (confirm("Include Lowercase?")) {
    choices = choices.concat(lowerCase)
    console.log(choices);
  }
  if (confirm("Include Uppercase?")) {
    choices = choices.concat(upperCase)
    console.log(choices);
  }
  if (confirm("Include Numbers?")) {
    choices = choices.concat(numbers)
    console.log(choices);
  }
  if (confirm("Include Symbols?")) {
    choices = choices.concat(symbols)
    console.log(choices);
  }
  return choices
}
