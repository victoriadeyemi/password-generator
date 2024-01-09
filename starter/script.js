// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Objects created from the arrays
var passwordOptions = {
    length: 0,
    numeric: "",
    lower: "",
    upper: "",
    specChars: "",
}

// Function to prompt user for password options
function getPasswordOptions() {
  passwordOptions.length = parseInt(prompt("Please enter the length of the password you would like:"));
  if (isNaN(passwordOptions.length) || passwordOptions.length < 8 || passwordOptions.length > 128) return;
  passwordOptions.numeric = confirm("Would you like to include numeric characters?:");
  passwordOptions.lower = confirm("Would you like to include lower characters?:");
  passwordOptions.upper = confirm ("Would you like to include upper characters?:");
  passwordOptions.specChars = confirm ("Would you like to include special characters?:");
}

// Function for getting a random element from an array
function getRandom(arr= []) {
var random = Math.floor(Math.random()*arr.length);
return arr[random];
}

// Function to generate password with user input
function generatePassword() {
  var password = ""
  var passwordCharacters = []
  getPasswordOptions();

  //Include numeric characters in password if chosen by user
  if (passwordOptions.numeric){
    password += getRandom(numericCharacters)
    passwordCharacters = [...passwordCharacters, ...numericCharacters]
  }

  //Include lowercase characters in password if chosen by user
  if (passwordOptions.lower){
    password += getRandom(lowerCasedCharacters)
    passwordCharacters = [...passwordCharacters, ...lowerCasedCharacters]
  }

  //Include uppercase characters in password if chosen by user
  if(passwordOptions.upper){
    password += getRandom(upperCasedCharacters)
    passwordCharacters = [...passwordCharacters, ...upperCasedCharacters]
  }

  //Include special characters in password if chosen by user
  if(passwordOptions.specChars){
    password += getRandom(specialCharacters)
    passwordCharacters = [...passwordCharacters, ...specialCharacters]
  }

  //Loop to create password based on user's preferences
  for(var i = password.length; i<passwordOptions.length; i++){
    password += getRandom(passwordCharacters)
  }
  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);