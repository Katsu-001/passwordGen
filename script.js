// All possible inputs for passwords
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

//Function to determine password settings

function getPasswordOptions() {
  var length = parseINT(
    prompt('How long will the password be? 8-128'), 15
  );

  if (Number.isNaN(length)) {
    alert('must be a number');
    return null;
  }
  if (length < 8) {
    alert('must be at least 8 characters');
    return null;
  }
  if (length > 128) {
    alert('must be 128 or fewer characters');
    return null;
  }
  var hasLowerCasedCharacters = confirm(
    'Press OK to include lowercase characters.'
  );
  var hasUpperCasedCharacters = confirm(
    'Press OK to include uppercase characters.'
  );
  var hasNumericCharacters = confirm(
    'Press OK to include numeric characters.'
  );
  var hasSpecialCharacters = confirm(
    'Press OK to include special characters.'
  );
// Check to make sure there are some characters to be used
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Needs at least one character type');
    return null;
  }
// storage for options selected
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
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
