// Assignment code here
var charLength = window.prompt("Please enter a desired character length between 8 and 128 characters")
var charSet = window.prompt("Please enter desired character sets, including lowercase(L), uppercase(U), numeric(N), and special(S)")

function generatePassword(){
  // validate charLength
  if (typeOf charLength != 'number' || charLength <= 8 || charLength >= 128){
    window.alert("Invalid length input.  Please refresh the page and try again")  
  } else {
    var charLengthValidated = charLength;
  }
  // validate charSet
  for (var i = 0; i < charSet.length; i++) { 
    if (charSet[i] != "L" || charSet[i] != "U" || charSet[i] != "N" || charSet[i] != "S"){
      window.alert("Invalid type input. Please refresh the page and try again")  
    } else if (charSet[i] == "L"){
      var typeLower = true;
    } else if (charSet[i] == "U"){
      var typeUpper = true;
    } else if (charSet[i] == "N"){
      var typeNumeric = true;
    } else if (charSet[i] == "S"){
      var typeSpecial = true;
    }
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
